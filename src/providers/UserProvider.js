import React, { useState, useEffect, createContext } from "react";
import { auth, generateUserDocument } from "../firebase/fire";

export const UserContext = createContext({ user: "loading" });

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const getUser = await generateUserDocument(userAuth);
      setUser(getUser);
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
