"use client";
import React, { useState, createContext } from "react";
import Login from "../app/login/page";
import Register from "../app/register/page";
export const AppContext = createContext({});

const ContextCase1 = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  return (
    <AppContext.Provider value={{ username, setUsername, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextCase1;
