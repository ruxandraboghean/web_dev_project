//Ruxandra - functie pentru salvarea datelor in local storage

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default setLocalStorage;
