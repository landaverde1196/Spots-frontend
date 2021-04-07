import { useState, createContext, useCallback } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpires =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpires);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpires.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        userId: userId,
        tokenExpirationDate: tokenExpirationDate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
