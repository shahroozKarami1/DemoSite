import { createContext } from "react";

let authContext = createContext({
  isLogin: false,
  userToken: null,
  userData: null,
  login: () => {},
  logout: () => {},
});

export default authContext;
