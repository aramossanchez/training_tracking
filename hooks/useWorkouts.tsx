export const useWorkouts = () => {

  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const saved_workouts = isLocalStorageAvailable
    ? localStorage.getItem("training_tracking_my_workouts")
    : null;
    
  const storeWorkout = (item: string) => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("training_tracking_my_workouts", item);
    }
  };

  return {
    saved_workouts,
    storeWorkout
  }

}