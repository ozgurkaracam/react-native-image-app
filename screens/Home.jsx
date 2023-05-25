import { Alert, SafeAreaView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Div, Icon, Text, Image } from "react-native-magnus";
import HomeButton from "../components/home/HomeButton";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const [uri, setUri] = useState("");
  const navigation = useNavigation();
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const captureImage = async () => {
    await requestPermission();
    let results = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!results.canceled) {
      setUri(results.assets[0].uri);
      props.navigation.navigate("FileEdit", { uri: results.assets[0].uri });
    }
  };
  const pickImage = async () => {
    let results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!results.canceled) {
      setUri(results.assets[0].uri);
      props.navigation.navigate("FileEdit", {
        uri: results.assets[0].uri,
        size: results.assets[0].fileSize,
      });
    }
  };

  useEffect(() => {});

  return (
    <SafeAreaView flex={1}>
      <HeaderTitle />
      <Div flex={1} justifyContent="center" alignItems="center">
        <HomeButton text="Capture Image" icon="camera" onPress={captureImage} />
        <HomeButton icon="folder-open" onPress={pickImage} />
      </Div>
    </SafeAreaView>
  );
};

const HeaderTitle = () => (
  <Div pt={"xl"}>
    <Text
      fontWeight="500"
      color="blue600"
      fontSize={33}
      mb={30}
      textAlign="center"
    >
      Welcome Image Compress App!
    </Text>
    <Text mt={3} textAlign="center">
      Please check or capture an image...
    </Text>
  </Div>
);

export default Home;
