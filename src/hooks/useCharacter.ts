import { useEffect, useState } from "react";
import { Character } from "../types/api";
import { getCharacter } from "../services/apiService";

export const useCharater = () =>{
  const [character, setCharacter] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCharacter();//aqui ya tenemos los datos del json
        //Almacenar en el arreglo
        setCharacter(data);
      } catch (error) {
        setError("Error al cargar, Intenta mas tarde");
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchPosts(); //mismo nombre de la funcion para q se vuelva a ejecutar este atento actualizando
  },[]);//se pone[] para q se ejecute solo una vez al cargar pantalla
  return {character, loading, error};//ya me devuelve los datos del json cargar y error
};
