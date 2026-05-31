
import { axiosInstance } from "../api/axiosInstance";
import { Character } from "../types/api";

interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

//OBTNER DATOS
export const getCharacter = async(): Promise<Character[]> =>{
    const response = await axiosInstance.get<CharactersResponse>('/character');
    return response.data.results;
}

//OBTENER POR ID
export const getCharacterById = async (id: number): Promise<Character> => {
    const response = await axiosInstance.get<Character>(`/character/${id}`);
    return response.data;
};

