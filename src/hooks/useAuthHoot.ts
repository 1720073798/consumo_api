import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
//siempre que quiera ver el usuario o loadig se trabaja con esta fruncion
export const useAuthHook = ()=>{
    return useContext(AuthContext)
}