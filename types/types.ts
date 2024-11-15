export interface CreatingSession {
  name: string,
  session: string[],
}

export interface Workout extends CreatingSession {
  sets?: string,
  repetitions?: string,
  weight?: string,
  time?: string
}