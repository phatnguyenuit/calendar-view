export interface WorkoutExerciseSet {
  reps: number;
  weight: number;
}

export interface WorkoutExercise {
  name: string;
  sets: WorkoutExerciseSet[];
}

export interface WorkoutCollection {
  name: string;
  exercises: WorkoutExercise[];
}
