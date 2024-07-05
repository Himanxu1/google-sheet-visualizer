import { createContext, useState } from "react";
const DataContext = createContext()

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
  
    return (
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    );
  };



  export { DataContext, ContextProvider };
