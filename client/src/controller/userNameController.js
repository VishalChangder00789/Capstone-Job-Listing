export const sendUserNameToLocalStorage = (username) => {
  localStorage.setItem("username", username);
};

export const getUserNameFromLocalStorage = () => {
  return localStorage.getItem("username");
};
