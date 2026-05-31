import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 10000,
    headers: {//si se tiene usuario y conrtaseañ
        'Content-Type': 'application/json',
    }
})


//Interceptor request
//Es para seguridades es necesario
axiosInstance.interceptors.request.use(
    (config)=>{
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

//Interceptor response 
axiosInstance.interceptors.response.use(
    (response)=> response,
    (error)=>{
        console.log("Api Error", error.message)
        return Promise.reject(error);
    },
);