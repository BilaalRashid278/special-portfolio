'use client'
import React,{createContext,useState} from 'react';

export const Context = createContext<any>(null);

const ContextProvider = ({children} : {children : React.ReactNode}) : JSX.Element => {
  const [data,setData] = useState<number>(0);
 
  return (
    <Context.Provider value={{data,setData}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;
