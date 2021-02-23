import { memo } from 'react';
import { WorkoutCollection } from 'types/common';
import Exercise from '../exercise';
import MoreIcon from '../more-icon';
import classes from './styles.module.css';

export const WorkoutComponent: React.FC<WorkoutProps> = ({
  name,
  exercises,
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
    {exercises.map((exercise, index) => (
      <Exercise key={`${exercise.name}+${index}`} {...exercise} />
    ))}
  </div>
);

const Workout = memo(WorkoutComponent);
Workout.displayName = 'Workout';

export default Workout;

export type WorkoutProps = WorkoutCollection;
