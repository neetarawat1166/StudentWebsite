import axios from "axios";
import { createContext, useState,useEffect } from "react";

export const isAuthenticatedContext = createContext({
    isAuthenticat: false,
    setUser: () => {},
    isLoading: true,
    setLoading: () => {},
    studentcheck: true,
    setStudentcheck: () => {}
})

export const IsAuthenticatedContextProvider = ({children}) => {

    const [isAuthenticat, setisAuthenticat] = useState(false);
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(true)
    const [studentcheck, setStudentcheck] = useState(true)


    return(
           <isAuthenticatedContext.Provider value={{isAuthenticat,setisAuthenticat,user,setUser, isLoading, setLoading, studentcheck, setStudentcheck}}>
            {children}
           </isAuthenticatedContext.Provider>
    )
}