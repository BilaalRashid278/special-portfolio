'use client'
import React,{createContext,useState} from 'react';

export const Context = createContext<any>(null);

const ContextProvider = ({children} : {children : React.ReactNode}) : JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{openModal,setOpenModal}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;
