import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StackNavigator } from './src/navegation/StackNavegador';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';


const App=()=> {
  //le mando el AuthContext a mi padre con datos
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <StackNavigator />
    </AuthProvider>
  );
}

export default App;
