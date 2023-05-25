import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import FileEdit from "../screens/FileEdit";

const Stack = createNativeStackNavigator();

const RouterProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FileEdit" component={FileEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterProvider;
