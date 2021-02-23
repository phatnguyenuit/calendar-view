import { memo } from 'react';
import { WorkoutExercise } from 'types/common';
import { getExerciseDescription } from './utils';
import classes from './styles.module.css';

export const ExerciseComponent: React.FC<ExerciseProps> = ({ name, sets }) => (
  <div className={classes.container}>
    <p className={classes.name}>{name}</p>
    <div className={classes.description}>
      <span>{sets.length}x</span>
      <div className={classes.grow}></div>
      <div className={classes.setDescription}>
        <span>
          {getExerciseDescription({
            name,
            sets,
          })}
        </span>
      </div>
    </div>
  </div>
);

const Exercise = memo(ExerciseComponent);
Exercise.displayName = 'Exercise';

export default Exercise;

export type ExerciseProps = WorkoutExercise;
