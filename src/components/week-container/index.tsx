import { memo, useState, useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import {
  getCurrentWeekDates,
  getDate2Digits,
  getWeekDay,
  isToday,
} from 'utils/date';
import classnames from 'utils/classnames';
import { normalize } from 'utils/string';

import { WORKOUTS } from 'constants/seeds';
import Workout from 'components/workout';
import {
  WORKOUT_CONTAINER_PREFIX,
  WORKOUT_EXERCISES_PREFIX,
} from 'constants/string';
import { swapExercises, prepareWorkoutsState } from './utils';
import classes from './styles.module.css';

const currentWeekDates = getCurrentWeekDates();
export const WeekContainerComponent: React.FC = () => {
  const [workouts, setWorkouts] = useState(prepareWorkoutsState(WORKOUTS));
  const handleDragEnd = useCallback((result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    console.log('source', source);
    console.log('destination', destination);
    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      // swap exerciseS
      if (source.droppableId.includes(WORKOUT_EXERCISES_PREFIX)) {
        const [weekdayAndIndex, droppedWorkoutName] = source.droppableId.split(
          WORKOUT_EXERCISES_PREFIX,
        );
        const match = /(?<weekday>\d+)-(?<index>\d+)/.exec(weekdayAndIndex);
        if (match?.groups) {
          const { weekday, index } = match.groups;
          console.log('weekday', weekday);
          console.log('index', index);
          console.log('droppedWorkoutName', droppedWorkoutName);
          setWorkouts((wks) => {
            return {
              ...wks,
              [weekday]: wks[Number(weekday)].map((wk, i) => {
                if (i.toString() === index) {
                  if (normalize(wk.name) === droppedWorkoutName) {
                    console.log(
                      swapExercises(
                        wk.exercises,
                        source.index,
                        destination.index,
                      ),
                    );
                    return {
                      ...wk,
                      exercises: swapExercises(
                        wk.exercises,
                        source.index,
                        destination.index,
                      ),
                    };
                  }
                }
                return wk;
              }),
            };
          });
        }
        return;
      }
    }

    return;
  }, []);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes['week-container']} data-testid="week-container">
        {currentWeekDates.map((date) => {
          const weekday = date.getDay();
          const dayWorkouts = workouts[weekday] ?? [];
          return (
            <div key={date.toString()} className={classes['date-container']}>
              <div className={classes['week-day']}>
                <span>{getWeekDay(date)}</span>
              </div>
              <Droppable droppableId={`${WORKOUT_CONTAINER_PREFIX}${weekday}`}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className={classes['workout-container']}
                    ref={provided.innerRef}
                  >
                    <div
                      className={classnames(classes['workout-date'], {
                        [classes.today]: isToday(date),
                      })}
                    >
                      <span>{getDate2Digits(date)}</span>
                    </div>
                    <div>
                      {dayWorkouts.map((workout, index) => (
                        <Draggable
                          key={`${workout.name}+`}
                          draggableId={`${workout.name}-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Workout
                                index={index}
                                weekday={weekday}
                                {...workout}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

const WeekContainer = memo(WeekContainerComponent);
WeekContainer.displayName = 'WeekContainer';

export default WeekContainer;
