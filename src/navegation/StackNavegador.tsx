import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";
import { COLORS } from "../styles/estilo";
import { HomeScreen } from "../screens/app/HomeScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { useAuthHook } from "../hooks/useAuthHoot";
import { AppStack } from "./AppStack";
import { LoadingSpinner } from "../components/common/LoadingSpinner";

const StackNavegacion = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  //traigo mi usuario desde firebase q ya implemnte anteriormete
 const {user ,loading} =useAuthHook();

 if(loading) return <LoadingSpinner message="Iniciando Aplicación"/>
 
 return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};
