import { WorkoutCollection, WorkoutExercise } from 'types/common';

export const swapExercises = (
  exercises: WorkoutExercise[],
  fromIndex: number,
  toIndex: number,
) => {
  const length = exercises.length;
  if ([fromIndex, toIndex].some((x) => x < 0 || x >= length))
    throw new Error('Wrong index');
  return exercises.map((exercise, index, array) => {
    if (index === fromIndex) return array[toIndex];
    if (index === toIndex) return array[fromIndex];
    return exercise;
  });
};

export const prepareWorkoutsState = (workouts: WorkoutCollection[]) => {
  return workouts.reduce((prev, wk, index) => {
    return {
      ...prev,
      [index]: [...(prev[index] ?? []), wk],
    };
  }, {} as Record<number, WorkoutCollection[]>);
};
