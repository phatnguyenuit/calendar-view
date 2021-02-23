import { WorkoutExercise, WorkoutExerciseSet } from 'types/common';

export const getSetDescription = ({ reps, weight }: WorkoutExerciseSet) => {
  return `${weight} lb x ${reps}`;
};

export const getExerciseDescription = ({ sets }: WorkoutExercise) => {
  return sets.map(getSetDescription).join(', ');
};
