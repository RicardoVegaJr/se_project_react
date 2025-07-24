const TOKEN_KEY = "jwt";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const checkToken = () => {
  const jwt = getToken();

  if (!jwt) {
    console.error("No JWT found.");
    throw new Error("Authentication token not found.");
  }
  return jwt;
};
