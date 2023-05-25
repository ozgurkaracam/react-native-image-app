import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Div, Icon, Image, Input, Text } from "react-native-magnus";
import Header from "../components/FileEdit/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { manipulateAsync } from "expo-image-manipulator";
import BottomCardSlider from "../components/FileEdit/BottomCardSlider";
import BottomCardDimentions from "../components/FileEdit/BottomCardDimentions";

const FileEdit = () => {
  const route = useRoute();
  const params = useNavigation();
  const [showCompress, setShowCompress] = useState(true);

  const [sliderValue, setSliderValue] = React.useState(50);
  const [uri, setUri] = useState("t");
  const rotateLeft = async () => {
    const result = await manipulateAsync(uri, [{ rotate: -90 }]);
    setUri(result.uri);
  };

  const rotateRight = async () => {
    const result = await manipulateAsync(uri, [{ rotate: 90 }]);
    setUri(result.uri);
  };
  const [dimentions, setDimentions] = React.useState({
    width: 300,
    height: 300,
  });
  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", () => {
      setShowCompress(false);
    });
    Keyboard.addListener("keyboardWillHide", () => {
      setShowCompress(true);
    });
    setUri(route.params?.uri);
    return () => {};
  }, [route.params]);

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
      <Header file={uri} dimentions={dimentions} />
      <ImageView dimentions={dimentions} uri={uri} size={route.params?.size} />

      <BottomCardDimentions
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        dimentions={dimentions}
        setDimentions={setDimentions}
      />
      <BottomCardSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        showCompress={showCompress}
      />
    </KeyboardAvoidingView>
  );
};

const ImageView = ({ size, uri, dimentions }) => (
  <Div flex={1}>
    <Div flex={1}>
      <Div p={13} bg="gray300" m={"xl"}>
        {size && (
          <Text mb={2} textAlign="center">
            File Size: {parseInt(size / 8 / 1024)} MB
          </Text>
        )}
        <Image
          source={{ uri: uri || "" }}
          h={dimentions.height}
          w={dimentions.width}
        />
      </Div>
    </Div>
  </Div>
);

export default FileEdit;
