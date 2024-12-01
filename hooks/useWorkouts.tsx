export const useWorkouts = () => {

  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const saved_workouts = () => {
    if (isLocalStorageAvailable) {
      const myWorkouts = localStorage.getItem("training_tracking_my_workouts") as string;
      if (myWorkouts) {
        return JSON.parse(myWorkouts);
      } else {
        return null;
      }
    }
  }

  const storeWorkout = (item: string) => {
    if (isLocalStorageAvailable) {
      const newMyWorkouts = JSON.stringify(item);
      localStorage.setItem("training_tracking_my_workouts", newMyWorkouts);
    }
  };

  return {
    saved_workouts,
    storeWorkout
  }

}