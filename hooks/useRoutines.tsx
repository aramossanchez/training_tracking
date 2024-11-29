export const useRoutines = () => {

  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const saved_routines = isLocalStorageAvailable
    ? localStorage.getItem("training_tracking_my_routines")
    : null;
    
  const storeRoutine = (item: string) => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("training_tracking_my_routines", item);
    }
  };

  return {
    saved_routines,
    storeRoutine
  }

}