import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const initialState = {
  model: false,
};
export const ContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");

  return (
    <StateContext.Provider
      value={{
        userType,
        setUserType,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
