export const useRoutines = () => {

  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const saved_routines = () => {
    if (isLocalStorageAvailable) {
      const myRoutines = localStorage.getItem("training_tracking_my_routines") as string;
      if (myRoutines) {
        return JSON.parse(myRoutines);
      } else {
        return null;
      }
    }
  }

  const storeRoutine = (item: string) => {
    if (isLocalStorageAvailable) {
      const newMyRoutines = JSON.stringify(item);
      localStorage.setItem("training_tracking_my_routines", newMyRoutines);
    }
  };

  return {
    saved_routines,
    storeRoutine
  }

}