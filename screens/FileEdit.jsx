import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Div, Icon, Image, Input, Text } from "react-native-magnus";
import Header from "../components/FileEdit/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { manipulateAsync } from "expo-image-manipulator";

const FileEdit = () => {
  const route = useRoute();
  const params = useNavigation();
  const [dimentions, setDimentions] = React.useState({
    width: 300,
    height: 300,
  });
  const [sliderValue, setSliderValue] = React.useState(50);
  const [uri, setUri] = useState("t");
  useEffect(() => {
    setUri(route.params?.uri);
    return () => {};
  }, [route.params]);

  const resize = async () => {
    try {
      const res = await manipulateAsync(
        uri,
        [{ resize: { width: dimentions.width, height: dimentions.height } }],
        { compress: 1 }
      );
      setUri(res.uri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Div flex={1}>
      <Header file={uri} />
      <ImageView dimentions={dimentions} uri={uri} size={route.params?.size} />

      <BottomCardDimentions
        dimentions={dimentions}
        setDimentions={setDimentions}
        resize={resize}
      />
      <BottomCardSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
    </Div>
  );
};

const BottomCardDimentions = ({ dimentions, setDimentions, resize }) => (
  <Div p={10} rounded={"xl"} bg="blue200" mx={13} mb={5}>
    <Div flexDir="row">
      <Div flex={1}>
        <Text textAlign="center" mb={4} fontWeight="600" color="blue700">
          Width
        </Text>
        <Input
          mx={6}
          keyboardType="number-pad"
          value={dimentions.width.toString()}
          onChangeText={(e) =>
            setDimentions((d) => ({ ...d, width: parseInt(e) || 0 }))
          }
        />
      </Div>
      <Div flex={1} mx={5}>
        <Text textAlign="center" mb={4} fontWeight="600" color="blue700">
          Height
        </Text>
        <Input
          keyboardType="number-pad"
          value={dimentions.height.toString()}
          onChangeText={(e) =>
            setDimentions((d) => ({ ...d, height: parseInt(e) || 0 }))
          }
        />
      </Div>
    </Div>
    <Div justifyContent="center" alignItems="center" flexDir="row" mt={5}>
      <Button>Left</Button>
      <Button mx={10} onPress={resize}>
        Resize
      </Button>
      <Button>Right</Button>
    </Div>
  </Div>
);

const BottomCardSlider = ({ setSliderValue, sliderValue }) => (
  <Div p={10} rounded={"xl"} bg="blue200" mx={13} mb={50}>
    <Div flexDir="row" alignItems="center" justifyContent="space-evenly">
      <Text textAlign="center" fontSize={22} color="blue600" fontWeight="bold">
        Compress
      </Text>
      <Div bg="blue800" p={15} rounded="circle">
        <Text color="white" fontWeight="800" fontSize={20}>
          {sliderValue}
        </Text>
      </Div>
    </Div>
    <Slider
      value={50}
      minimumValue={0}
      maximumValue={100}
      onValueChange={(v) => setSliderValue(parseInt(v))}
    />
  </Div>
);

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
