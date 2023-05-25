import { View } from "react-native";
import React from "react";
import { Div, ThemeProvider, Text, StatusBar } from "react-native-magnus";
import RouterProvider from "./router/RouterProvider";
const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <RouterProvider />
    </ThemeProvider>
  );
};

export default App;
