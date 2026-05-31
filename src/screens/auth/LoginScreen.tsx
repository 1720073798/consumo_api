import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { Input } from "../../ui/Input";
import { LoginForm } from "../../types/auth";
import { loginStyles } from "../../styles/estilo";
import { Button } from "../../ui/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navegation/RootStackParamList";
import { isValidEmail, isValidPassword } from "../../utils/validators";
import { loginWihtEmail } from "../../services/authServices";
import { FirebaseError } from "firebase/app";

type LoginScreenNavigationProp = StackScreenProps<RootStackParamList, "LoginScreen">
export const LoginScreen = ({navigation}: LoginScreenNavigationProp) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

    //actualiza a las cajas de texto lo q se escriba
  const handleInputCahnge =(key: string, value: string)=>{
    setLoginForm({...loginForm, [key]: value});
  };

    //funcion setear vacio mi formulario desde mi validator.ts
    //Y como ya estan cargado con datos mio register y login le mando al validador
    const validador = ():boolean =>{
      let validar = true;
      setEmailError("");
      setPasswordError("");
      if(!isValidEmail(loginForm.email)){
        setEmailError("Ingresa un email valido")
        validar = false;
      }
      if(!isValidPassword(loginForm.password)){
        setPasswordError("Contraseña minimo 6 caracteres")
        validar = false;
      }
      return validar;
    };

    //Funcion para iniciar sesion
  const inicioSesion = async () => {
    if(!validador()) return; //return es regresa 
    try {
      setLoading(true);
      await loginWihtEmail({
        email: loginForm.email,
        password: loginForm.password
      })
    } catch (error) {
       console.log(error);
            if(error instanceof FirebaseError){
              const msg = error.code === "auth/invalid-credential" 
              ? "El email y contraseñas incorrectas" 
              : "Error al iniciar. Intenta mas tarde";
              Alert.alert("Error", msg);
            }      
    }finally{
      setLoading(false);
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={loginStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={loginStyles.form}>
          <Input
            label="Correo electrónico"
            placeholder="ejemplo@correo.com"
            value={loginForm.email}
            onChangeText={(value) => handleInputCahnge("email", value)}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
          />
          <Input
            label="Contraseña"
            placeholder="Minimo 6 caracteres"
            value={loginForm.password}
            onChangeText={(value) => handleInputCahnge("password", value)}
            isPassword
            error={passwordError}
          />
          <Button
            title="Inicio Sesion"
            onPress={inicioSesion}
            loading={loading}
            style={loginStyles.button}
          />
        </View>

        <View style={loginStyles.footer}>
          <Text style={loginStyles.footerText}>¿Aún no te has registrado?</Text>
          <Text style={loginStyles.link} onPress={() => navigation.navigate("RegisterScreen")}>
            Registrarse
          </Text>
        </View>

        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
