import { createContext, useContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthProvider({children}){
    const initailAuthUser =localStorage.getItem("Users");

    const [authuser, setuser]=useState(
    initailAuthUser ? JSON.parse(initailAuthUser):undefined)
    return(
        <AuthContext.Provider value={[authuser,setuser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=>  useContext(AuthContext);
