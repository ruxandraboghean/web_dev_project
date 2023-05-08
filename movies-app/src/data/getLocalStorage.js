//Ruxandra - preluare date din local storage

const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

export default getLocalStorage;
