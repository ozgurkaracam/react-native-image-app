import { View } from "react-native";
import React from "react";
import { Div, ThemeProvider, Text } from "react-native-magnus";
import RouterProvider from "./router/RouterProvider";
const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
};

export default App;
