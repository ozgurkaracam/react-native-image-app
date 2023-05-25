import { ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, Header, Snackbar, Overlay, Text } from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { manipulateAsync } from "expo-image-manipulator";

export default function Headerr({ file = "test" }) {
  navigation = useNavigation();
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const snackBarRef = React.useRef();
  const [finalUri, setFinalUri] = React.useState();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const saveFile = async () => {
    const compResult = await manipulateAsync(
      file,
      [{ rotate: 90 }, { resize: { height: 30, width: 40 } }],
      {
        compress: 1,
      }
    );
    await requestPermission();
    setOverlayVisible(true);
    let result = await MediaLibrary.saveToLibraryAsync(compResult.uri);
    setOverlayVisible(false);
    snackBarRef.current.show("Download Successfull!", {
      suffix: <Icon name="checkcircle" color="white" fontFamily="AntDesign" />,
    });
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
