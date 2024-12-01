"use client";
import { useWorkouts } from "@/hooks/useWorkouts";

export const WorkoutsInMonth = (
  year: number,
  month: number
) => {
  const { saved_workouts } = useWorkouts();
  const workoutsOfMonth = structuredClone(saved_workouts());
  const workoutsFiltered = [];
  for (let i = 0; i < Object.keys(workoutsOfMonth).length; i++) {
    const workoutsOfTheYear = workoutsOfMonth[i].filter((workout) => workout.year === year);
    const workoutsOfTheMonth = workoutsOfTheYear.filter((workout) => workout.month === month);
    if (workoutsOfTheMonth.length > 0) {
      workoutsOfTheMonth.forEach(workout => {
        workoutsFiltered.push(workout);
      });
    }
  }

  return {
    workoutsFiltered,
  }

}