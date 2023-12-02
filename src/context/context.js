import { createContext, useContext, useState } from "react";
export const QuadMindsContext = createContext({});

export const AppContext = ({ children }) => {
  const [context, setContext] = useState({});

  return (
    <QuadMindsContext.Provider value={{ context, setContext }}>
      {children}
    </QuadMindsContext.Provider>
  );
};

export const useAppContext = () => useContext(QuadMindsContext);
