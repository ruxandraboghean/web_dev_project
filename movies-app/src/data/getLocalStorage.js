const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

export default getLocalStorage;
