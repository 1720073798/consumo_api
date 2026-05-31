import { auth } from "../config/firebase";
import { LoginForm, RegisterForm } from "../types/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";

//auth que le puse en mi firebase.ts 
//Crear un usuario
export const resgisterWithEmail = async(data: RegisterForm): Promise<UserCredential>=>{
    return createUserWithEmailAndPassword(auth, data.email, data.password)//aqui cargo a mi interface email, pasword
}

//se loguea con usuario ya creado
export const loginWihtEmail = async(data: LoginForm): Promise<UserCredential> =>{
    return await signInWithEmailAndPassword(auth, data.email, data.password)//aqui cargo a mi interface email, pasword
}

//para cerrar sesion
export const logout = async(): Promise<void>=>{
    return await signOut(auth);
}
