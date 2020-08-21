import React, { useState, useEffect, createContext } from "react";
import { auth, generateUserDocument } from "../firebase/fire";

export const UserContext = createContext({ user: null });

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
