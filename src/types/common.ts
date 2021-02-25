export interface WorkoutExerciseSet {
  reps: number;
  weight: number;
}

export interface WorkoutExercise {
  name: string;
  sets: WorkoutExerciseSet[];
}

export interface WorkoutContainer {
  name: string;
  exercises: WorkoutExercise[];
}

export interface WorkoutsPerWeekDay {
  [weekDay: number]: WorkoutContainer[];
}
