import { SafeAreaView, View } from "react-native";
import React from "react";
import { Div, Icon, Text } from "react-native-magnus";
import HomeButton from "../components/home/HomeButton";

const Home = () => {
  return (
    <SafeAreaView flex={1}>
      <Div>
        <Text fontSize={20} textAlign="center">
          Welcome Image Compress App!
        </Text>
        <Text mt={3} textAlign="center">
          Please check or capture an image...
        </Text>
      </Div>
      <Div flex={1} justifyContent="center" alignItems="center">
        <HomeButton text="Capture Image" icon="camera" />
        <HomeButton />
      </Div>
    </SafeAreaView>
  );
};

export default Home;
