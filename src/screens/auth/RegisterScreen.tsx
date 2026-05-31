import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Input } from "../../ui/Input";
import { RegisterForm } from "../../types/auth";
import { registerStyles, styles } from "../../styles/estilo";
import { Button } from "../../ui/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navegation/RootStackParamList";
import { isValidEmail, isValidPassword, passwordsMatch } from "../../utils/validators";
import { resgisterWithEmail } from "../../services/authServices";
import { FirebaseError } from "firebase/app";

type RegisterScreenNavegationProp = StackScreenProps<RootStackParamList, "RegisterScreen">
export const RegisterScreen = ({navigation}:RegisterScreenNavegationProp) => {
  const [emailError, setEmailError] = useState<string>("");
  const [userError, setUserError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmarPasswordError, setConfirmPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //actualiza a las cajas de texto lo q se escriba
  const handleInputCahnge =(key: string, value: string)=>{
    setRegisterForm({...registerForm, [key]: value});
  }

  //funcion setear vacio mi formulario desde mi validator.ts
  //Y como ya estan cargado con datos mio register y login le mando al validador
  const validador = ():boolean =>{
    let validar = true;
    setEmailError("");
    setPasswordError("");
    setUserError("");
    setConfirmPassword("");
    if(!isValidEmail(registerForm.email)){
      setEmailError("Ingresa un email valido")
      validar = false;
    }
    if(!isValidPassword(registerForm.password)){
      setPasswordError("Contraseña minimo 6 caracteres")
      validar = false;
    }
    if(!passwordsMatch(registerForm.password, registerForm.confirmPassword)){
      setConfirmPassword("Contraseñas no coinciden")
      validar= false;
    }
    return validar;
  };

  //funcion para guardar usando la valdiacion
  const guardarRegistro = async () =>{
    if(!validador()) return;
    try {
      //boton se bloque
      setLoading(true);
      //agrego lo que tengo en mi formulario a firebase
      //solo ocupo email y pasword
      console.log(registerForm.user)
      await resgisterWithEmail({
      email: registerForm.email,
      password: registerForm.password,
      confirmPassword: registerForm.confirmPassword,
      user: registerForm.user
      })
    } catch (error) { //errores q devuelve firebase
      console.log(error)
      if(error instanceof FirebaseError){
        const msg = error.code === "auth/email-already-in-use"
        ? "Este email ya exite"
        : "Error al registrase"
        Alert.alert("Error", msg)
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
        contentContainerStyle={registerStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={registerStyles.form}>
          <Input
            label="Ususario"
            placeholder="Xavier123"
            value={registerForm.user}
            onChangeText={(value) => handleInputCahnge("user", value)}
            autoCapitalize="none"
            error={userError}
          />
          <Input
            label="Correo"
            placeholder="ejemplo@correo.com"
            value={registerForm.email}
            onChangeText={(value) => handleInputCahnge("email", value)}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
          />

          <Input
            label="Password"
            placeholder="Minimo 6 caracteres"
            value={registerForm.password}
            onChangeText={(value) => handleInputCahnge("password", value)}
            isPassword
            error={passwordError}
          />

          <Input
            label="Confirmar Contraseña"
            placeholder="********"
            value={registerForm.confirmPassword}
            onChangeText={(value) => handleInputCahnge("confirmPassword", value)}
            isPassword
            error={confirmarPasswordError}
          />
          <Button
            style={registerStyles.button}
            title="Registrarse"
            onPress={guardarRegistro}
            loading={loading}
          />

          <View style={registerStyles.footer}>
            <Text style={registerStyles.footerText}>¿Ya tienes cuenta? </Text>
            <Text style={registerStyles.link} onPress={() => navigation.goBack()}>
              Inicia Sesión
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
