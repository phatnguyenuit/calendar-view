import { memo, useMemo } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { WORKOUT_EXERCISES_PREFIX } from 'constants/string';
import { normalize } from 'utils/string';
import { WorkoutContainer } from 'types/common';
import Exercise from '../exercise';
import MoreIcon from '../more-icon';
import PlusIcon from '../plus-icon';
import classes from './styles.module.css';

export const WorkoutComponent: React.FC<WorkoutProps> = ({
  exercises,
  weekday,
  name: workoutName,
  index: workoutIndex,
  onCreateExercise,
}) => {
  const droppableId = useMemo(
    () =>
      `${weekday}-${workoutIndex}-${WORKOUT_EXERCISES_PREFIX}${normalize(
        workoutName,
      )}`,
    [weekday, workoutIndex, workoutName],
  );
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.name}>
          <span>{workoutName}</span>
        </div>
        <button type="button" className={classes.moreButton}>
          <MoreIcon />
        </button>
      </div>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.exercises}
          >
            {exercises.map((exercise, exIndex) => {
              const key = `${weekday}-${workoutIndex}-${normalize(
                exercise.name,
              )}-${exIndex}`;
              return (
                <Draggable key={key} draggableId={key} index={exIndex}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Exercise {...exercise} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={classes.createExercise}>
        <button type="button" onClick={onCreateExercise}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

const Workout = memo(WorkoutComponent);
Workout.displayName = 'Workout';

export default Workout;

export interface WorkoutProps extends WorkoutContainer {
  index: number;
  weekday: number;
  onCreateExercise: React.MouseEventHandler;
}
