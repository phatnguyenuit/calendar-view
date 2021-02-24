import { useState, useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { WorkoutContainer } from 'types/common';
import {
  WORKOUT_EXERCISES_PREFIX,
  WORKOUT_CONTAINER_PREFIX,
} from 'constants/string';
import { WORKOUTS } from 'constants/seeds';
import { normalize } from 'utils/string';

export const swapArray = <TItem = any>(
  items: TItem[],
  fromIndex: number,
  toIndex: number,
) => {
  const length = items.length;
  if ([fromIndex, toIndex].some((x) => x < 0 || x >= length))
    throw new Error('Wrong index');
  return items.map((item, index, array) => {
    if (index === fromIndex) return array[toIndex];
    if (index === toIndex) return array[fromIndex];
    return item;
  });
};

export interface WorkoutsPerWeekDay {
  [weekDay: number]: WorkoutContainer[];
}
export const prepareWorkoutsState = (workouts: WorkoutContainer[]) => {
  return workouts.reduce((prev, wk, weekDay) => {
    return {
      ...prev,
      [weekDay]: [...(prev[weekDay] ?? []), wk],
    };
  }, {} as WorkoutsPerWeekDay);
};

export const extractWorkoutDroppableId = (droppableId: string) => {
  const [weekdayAndWorkoutIndex, workoutName] = droppableId.split(
    WORKOUT_EXERCISES_PREFIX,
  );
  const match = /(?<weekday>\d+)-(?<workoutIndex>\d+)/.exec(
    weekdayAndWorkoutIndex,
  );
  const result = {
    workoutName,
    weekday: -1,
    workoutIndex: -1,
  };

  if (match?.groups) {
    result.weekday = Number(match.groups.weekday);
    result.workoutIndex = Number(match.groups.workoutIndex);
  }

  return result;
};

export const extractWorkoutContainerDroppableId = (droppableId: string) => {
  const weekday = droppableId.replace(WORKOUT_CONTAINER_PREFIX, '');
  return {
    weekday: Number(weekday),
  };
};

export const removeArrayAtPosition = <TItem = any>(
  items: TItem[],
  index: number,
) => {
  const cloned = Array.from(items);
  cloned.splice(index, 1);
  return cloned;
};

export const insertArrayAtPosition = <TItem = any>(
  items: TItem[],
  index: number,
  item: TItem,
) => {
  const cloned = Array.from(items);
  cloned.splice(index, 0, item);

  return cloned;
};

export const useWeekContainer = () => {
  const [workouts, setWorkouts] = useState(prepareWorkoutsState(WORKOUTS));
  const handleDragEnd = useCallback((result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    // swap exercises
    if (
      [
        source.droppableId.includes(WORKOUT_EXERCISES_PREFIX),
        destination.droppableId.includes(WORKOUT_EXERCISES_PREFIX),
      ].every(Boolean)
    ) {
      const {
        workoutName: srcWorkoutName,
        workoutIndex: srcWorkoutIndex,
        weekday: srcWeekday,
      } = extractWorkoutDroppableId(source.droppableId);

      // Case 1: in the same workout
      if (
        [
          source.droppableId === destination.droppableId,
          source.index !== destination.index,
        ].every(Boolean)
      ) {
        setWorkouts((wks) => {
          return {
            ...wks,
            [srcWeekday]: wks[srcWeekday].map((wk, wkIndex) => {
              if (
                wkIndex === srcWorkoutIndex &&
                normalize(wk.name) === srcWorkoutName
              ) {
                return {
                  ...wk,
                  exercises: swapArray(
                    wk.exercises,
                    source.index,
                    destination.index,
                  ),
                };
              }
              return wk;
            }),
          };
        });
        return;
      }
      // Case 2: Swap exercises between workouts
      const {
        workoutName: dstWorkoutName,
        workoutIndex: dstWorkoutIndex,
        weekday: dstWeekday,
      } = extractWorkoutDroppableId(destination.droppableId);

      setWorkouts((prevWks) => {
        const srcExercise =
          prevWks[srcWeekday][srcWorkoutIndex].exercises[source.index];
        return {
          ...prevWks,
          [dstWeekday]: prevWks[dstWeekday].map((wk, wkIndex) => {
            if (
              wkIndex === dstWorkoutIndex &&
              normalize(wk.name) === dstWorkoutName
            ) {
              return {
                ...wk,
                exercises: insertArrayAtPosition(
                  wk.exercises,
                  destination.index,
                  srcExercise,
                ),
              };
            }
            return wk;
          }),
        };
      });

      // update srcWeekday workout container
      setWorkouts((prevWks) => {
        return {
          ...prevWks,
          [srcWeekday]: prevWks[srcWeekday].map((wk, wkIndex) => {
            if (
              wkIndex === srcWorkoutIndex &&
              normalize(wk.name) === srcWorkoutName
            ) {
              return {
                ...wk,
                exercises: removeArrayAtPosition(wk.exercises, source.index),
              };
            }
            return wk;
          }),
        };
      });
    }

    // Swap workout containers
    if (
      [
        source.droppableId.includes(WORKOUT_CONTAINER_PREFIX),
        destination.droppableId.includes(WORKOUT_CONTAINER_PREFIX),
      ].every(Boolean)
    ) {
      const { weekday: srcWeekday } = extractWorkoutContainerDroppableId(
        source.droppableId,
      );
      const { weekday: dstWeekday } = extractWorkoutContainerDroppableId(
        destination.droppableId,
      );

      // Case 1: Swap 2 workout containers together
      if (srcWeekday === dstWeekday) {
        setWorkouts((prevWks) => {
          return {
            ...prevWks,
            [srcWeekday]: swapArray(
              prevWks[srcWeekday],
              source.index,
              destination.index,
            ),
          };
        });
      }
      // Case 2: Move workout container between weekdays
      else {
        setWorkouts((prevWks) => {
          return {
            ...prevWks,
            [dstWeekday]: insertArrayAtPosition(
              prevWks[dstWeekday],
              destination.index,
              prevWks[srcWeekday][source.index],
            ),
          };
        });
        setWorkouts((prevWks) => {
          return {
            ...prevWks,
            [srcWeekday]: removeArrayAtPosition(
              prevWks[srcWeekday],
              source.index,
            ),
          };
        });
      }
    }

    // Ignore other cases
    return;
  }, []);

  return {
    workouts,
    handleDragEnd,
  };
};
