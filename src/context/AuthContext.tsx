import { onAuthStateChanged, User } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../config/firebase';

//SIRVE PARA VER SI TIENE USUARIO O NO
//contexto global para usar en hijo o padre

interface AuthContextType {
  user: User | null;  //User viene desde fireabe//si usuario ya inicia sesion o aun no
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null, //inicia con nulo
  loading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }:AuthProviderProps) => {
    //comenzamos a trabajar con el user
  const [user, setUser] = useState<User | null>(null); //user desde firebase
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //apenas se abre app debe ver si ya tiene un usuario 
    //pasamos la utenticacionde firebase.tsx
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser)=>{
      setUser(firebaseUser); //aqui le mando a mi hook
      setLoading(false);
    });
    return () => unsubscribe(); //se hace una sola consulta
  }, []);
//abajo mando ya mi usuario a ese componete como parametro para cualquier componente
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
