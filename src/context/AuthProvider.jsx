import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [authData, setAuthData] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(()=>{
    if (!localStorage.getItem("employees") || !localStorage.getItem("admins")) {
      setLocalStorage();
    }
    setAuthData(getLocalStorage());
  }, [flag]);

  return (
    <div>
      <AuthContext.Provider value={[authData, flag, setFlag]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
