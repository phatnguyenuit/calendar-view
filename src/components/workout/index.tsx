import { memo } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { WorkoutCollection } from 'types/common';
import { WORKOUT_EXERCISES_PREFIX } from 'constants/string';
import Exercise from '../exercise';
import MoreIcon from '../more-icon';
import classes from './styles.module.css';
import { normalize } from 'utils/string';

export const WorkoutComponent: React.FC<WorkoutProps> = ({
  name,
  exercises,
  index,
  weekday,
}) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <div className={classes.name}>
        <span>{name}</span>
      </div>
      <button type="button" className={classes.moreButton}>
        <MoreIcon />
      </button>
    </div>
    <Droppable
      droppableId={`${weekday}-${index}-${WORKOUT_EXERCISES_PREFIX}${normalize(
        name,
      )}`}
    >
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {exercises.map((exercise, index) => (
            <Draggable
              key={`${normalize(exercise.name)}+${index}`}
              draggableId={`${exercise.name}-${index}`}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Exercise key={`${exercise.name}+${index}`} {...exercise} />
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

const Workout = memo(WorkoutComponent);
Workout.displayName = 'Workout';

export default Workout;

export interface WorkoutProps extends WorkoutCollection {
  index: number;
  weekday: number;
}
