import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon, Header, Snackbar, Overlay, Text } from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { manipulateAsync } from "expo-image-manipulator";

export default function Headerr({ file = "test", dimentions }) {
  navigation = useNavigation();
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const snackBarRef = React.useRef();
  const [finalUri, setFinalUri] = React.useState();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const saveFile = async () => {
    Keyboard.dismiss();
    try {
      await requestPermission();

      const res = await manipulateAsync(
        file,
        [{ resize: { width: dimentions.width, height: dimentions.height } }],
        { compress: 1 }
      );

      setOverlayVisible(true);
      let result = await MediaLibrary.saveToLibraryAsync(res.uri);
      setOverlayVisible(false);
      snackBarRef.current.show("Download Successfull!", {
        style: {
          zIndex: 9999,
        },
        suffix: (
          <Icon name="checkcircle" color="white" fontFamily="AntDesign" />
        ),
      });

      console.log();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Header
        pt={50}
        bg="transparent"
        prefix={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              bg="blue500"
              fontFamily="Feather"
              fontSize={34}
              rounded="circle"
              p={10}
              color="white"
              name="arrow-left"
            />
          </TouchableOpacity>
        }
        suffix={
          <TouchableOpacity onPress={saveFile}>
            <Icon
              bg="blue500"
              fontFamily="Feather"
              fontSize={34}
              rounded="circle"
              p={10}
              color="white"
              name="download"
            />
          </TouchableOpacity>
        }
      ></Header>
      <Snackbar bg="green500" ref={snackBarRef} />
      <Overlay visible={overlayVisible} p="xl">
        <ActivityIndicator />
        <Text mt="md">Loading...</Text>
      </Overlay>
    </>
  );
}
