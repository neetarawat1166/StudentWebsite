import axios from "axios";
import { createContext, useState,useEffect } from "react";

export const isAuthenticatedContext = createContext({
    isAuthenticat: false,
    setUser: () => {}
})

export const IsAuthenticatedContextProvider = ({children}) => {

    const [isAuthenticat, setisAuthenticat] = useState(false);
    const [user, setUser] = useState();


    return(
           <isAuthenticatedContext.Provider value={{isAuthenticat,setisAuthenticat,user,setUser}}>
            {children}
           </isAuthenticatedContext.Provider>
    )
}