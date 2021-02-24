import { memo } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { WorkoutContainer } from 'types/common';
import { WORKOUT_EXERCISES_PREFIX } from 'constants/string';
import Exercise from '../exercise';
import MoreIcon from '../more-icon';
import classes from './styles.module.css';
import { normalize } from 'utils/string';

export const WorkoutComponent: React.FC<WorkoutProps> = ({
  name: workoutName,
  exercises,
  index: workoutIndex,
  weekday,
}) => {
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
      <Droppable
        droppableId={`${weekday}-${workoutIndex}-${WORKOUT_EXERCISES_PREFIX}${normalize(
          workoutName,
        )}`}
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.exercises}
          >
            {exercises.map((exercise, exIndex) => (
              <Draggable
                key={`${weekday}-${workoutIndex}-${normalize(
                  exercise.name,
                )}-${exIndex}`}
                draggableId={`${weekday}-${workoutIndex}-${normalize(
                  exercise.name,
                )}-${exIndex}`}
                index={exIndex}
              >
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
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

const Workout = memo(WorkoutComponent);
Workout.displayName = 'Workout';

export default Workout;

export interface WorkoutProps extends WorkoutContainer {
  index: number;
  weekday: number;
}
