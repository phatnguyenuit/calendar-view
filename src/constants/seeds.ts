import { WorkoutContainer } from 'types/common';
import { randomIntegerInRange } from 'utils/number';

export const WORKOUTS: WorkoutContainer[] = [
  'Chest',
  'Leg',
  'Arm',
  'Shoulder',
  'Back',
  'Abs',
].map((part) => ({
  name: `${part} day`,
  exercises: new Array(randomIntegerInRange(1, 4))
    .fill(undefined)
    .map((_, index) => ({
      name: `${part} Ex${index + 1}`,
      sets: new Array(randomIntegerInRange(2, 4))
        .fill(undefined)
        .map((_, index) => ({
          weight: randomIntegerInRange(10, 50),
          reps: randomIntegerInRange(6, 12),
        })),
    })),
}));
