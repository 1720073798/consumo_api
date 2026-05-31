// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEI3oqjh09LcnxwdTxJsyYyHiRl5D_Rog",
  authDomain: "ft-runner.firebaseapp.com",
  projectId: "ft-runner",
  storageBucket: "ft-runner.firebasestorage.app",
  messagingSenderId: "227777833293",
  appId: "1:227777833293:web:09377aafa6995407a82f04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//se pone para usarlo en toda la aplicacion
//export const auth = getAuth(app)
// se modifica la linea de arriba
//para mantener iniciada sesion si ya em logue
//mantener la persintecia dentro del dispositivo
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

