import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { homeStyles, styles } from "../styles/estilo";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../services/authServices";
import { useAuthHook, } from "../hooks/useAuthHoot";

export const Header = () => {
   const{user}= useAuthHook();

  //boton para cerrar sesion
  const cerrarSesion = () => {
    Alert.alert("Cerrar sesion", "Estas seguro de cerrar sesion?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", style: "destructive", onPress: () => logout() },
    ]);
  };
  return (
    <View style={styles.header}>
      <View style={styles.userSection}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        />
        <View style={styles.welcomeText}>
          <Text style={styles.hello}>Hola, Xavier Condor</Text>
          <Text style={styles.subtitle}>Listo para superar tus límites</Text>
        </View>
        <TouchableOpacity style={homeStyles.logoutBtn} onPress={cerrarSesion}>
          <Text style={homeStyles.logoutText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
