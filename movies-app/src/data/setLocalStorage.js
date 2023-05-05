//function to save data into locat storage
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default setLocalStorage;
