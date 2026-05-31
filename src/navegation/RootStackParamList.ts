import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    HomeScreen: undefined;
  Detail: { id: number };
    LoginScreen: undefined;
    RegisterScreen: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;