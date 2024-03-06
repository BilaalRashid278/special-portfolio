'use client'
import React,{createContext,useState} from 'react';

export const Context = createContext<any>(null);

const ContextProvider = ({children} : {children : React.ReactNode}) : JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [isAdmin,setAdmin] = useState<boolean>(false);
  const [adminPassword,setAdminPassword] = useState<string>('');
  return (
    <Context.Provider value={{
      openModal,setOpenModal,
      isAdmin,setAdmin,
      adminPassword,setAdminPassword
      }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;
