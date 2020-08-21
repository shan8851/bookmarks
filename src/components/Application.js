import React, { useContext, useState, useEffect } from "react";
import { Router } from "@reach/router";
import LogIn from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import PasswordReset from "./Auth/PasswordReset";
import AddBookmark from "./bookmarks/AddBookmark";
import Bookmarks from "./bookmarks/Bookmark";
import { UserContext } from "../providers/UserProvider";
import Spinner from "./loading/Spinner";
function App() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Spinner />;

  return user ? (
    <Router>
      <AddBookmark path="/add-bookmark" />
      <Bookmarks path="/" />
    </Router>
  ) : (
    <Router>
      <SignUp path="signUp" />
      <LogIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default App;
