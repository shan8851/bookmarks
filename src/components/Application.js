import React, { useContext } from "react";
import { Router } from "@reach/router";
import LogIn from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Main from "./Main";
import PasswordReset from "./Auth/PasswordReset";
import { UserContext } from "../providers/UserProvider";
function App() {
  const user = useContext(UserContext);
  return user ? (
    <Main />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <LogIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default App;
