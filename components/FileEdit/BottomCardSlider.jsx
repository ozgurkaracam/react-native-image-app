import { View } from "react-native";
import React from "react";
import { Div, Text } from "react-native-magnus";
import Slider from "@react-native-community/slider";

const BottomCardSlider = ({ setSliderValue, sliderValue, showCompress }) => {
  if (!showCompress) return <></>;
  return (
    <Div p={10} rounded={"xl"} bg="blue200" mx={13} mb={50}>
      <Div flexDir="row" alignItems="center" justifyContent="space-evenly">
        <Text
          textAlign="center"
          fontSize={22}
          color="blue600"
          fontWeight="bold"
        >
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
};

export default BottomCardSlider;
