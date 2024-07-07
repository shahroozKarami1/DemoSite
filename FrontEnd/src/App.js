import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Route, useRoutes } from "react-router-dom";
import routes from "./routes";
import authContext from "./Componnents/context/authContext";
import Topbar from "./Componnents/Topbar/Topbar";
export default function App() {
  let Router = useRoutes(routes);
  let [userToken, setUserToken] = useState(null);
  let [isLogin, setIsLogin] = useState(null);
  let [userData, setUserData] = useState(null);

  const login = useCallback((userInfo, userToken) => {
    setUserToken(userToken);
    setIsLogin(true);
    setUserData(userInfo);
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: userToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUserData(null);
    setUserToken(null);
  }, []);

  useEffect(() => {
    let getFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (getFromLocalStorage) {
      fetch("http://localhost:4000/v1/auth/me?", {
        headers: {
          Authorization: `Bearer ${getFromLocalStorage.token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((userData) => {
          setIsLogin(true);
          setUserData(userData);
        });
    }
  }, [login]);

  return (
    <authContext.Provider
      value={{
        userToken,
        isLogin,
        userData,
        login,
        logout,
      }}
    >

      <Topbar></Topbar>
      {Router}
    </authContext.Provider>
  );
}
