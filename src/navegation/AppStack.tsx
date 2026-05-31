import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from './RootStackParamList';
import { HomeScreen } from '../screens/app/HomeScreen';
import DetailScreen, {} from '../screens/app/DetailScreen';

export const AppStack = () => {
const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio de sesion" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalle" }}
      />

    </Stack.Navigator>
  );
}

