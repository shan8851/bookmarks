import React from "react";
import { Router } from "@reach/router";
import LogIn from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Main from "./components/Main";
import PasswordReset from "./components/Auth/PasswordReset";
function App() {
  const user = null;
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
