export const sendTokenToLocalStorage = (token) => {
  return localStorage.setItem("token", token);
};
