import { View } from "react-native";
import React from "react";
import { Div, Text, Input, Button, Icon } from "react-native-magnus";

const BottomCardDimentions = ({
  dimentions,
  setDimentions,
  resize,
  rotateLeft,
  rotateRight,
}) => (
  <Div p={10} rounded={"xl"} bg="blue200" mx={13} mb={5}>
    <Div flexDir="row">
      <Div flex={1}>
        <Text textAlign="center" mb={4} fontWeight="600" color="blue700">
          Width
        </Text>
        <Input
          mx={6}
          keyboardType="numeric"
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
          keyboardType="numeric"
          value={dimentions.height.toString()}
          onChangeText={(e) =>
            setDimentions((d) => ({ ...d, height: parseInt(e) || 0 }))
          }
        />
      </Div>
    </Div>
    <Div alignItems="center" justifyContent="space-around" flexDir="row" mt={5}>
      <Button onPress={rotateLeft}>
        <Icon
          color="white"
          fontSize={20}
          fontFamily="FontAwesome"
          name="rotate-left"
        />
      </Button>
      <Button onPress={rotateRight}>
        <Icon
          color="white"
          fontSize={20}
          fontFamily="FontAwesome"
          name="rotate-right"
        />
      </Button>
    </Div>
  </Div>
);

export default BottomCardDimentions;
