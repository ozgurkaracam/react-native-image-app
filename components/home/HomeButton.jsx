import { View } from "react-native";
import React from "react";
import { Div, Icon, Text } from "react-native-magnus";

const HomeButton = ({ icon = "folder", text = "Pick Image" }) => {
  return (
    <Div
      borderWidth={4}
      borderColor="blue500"
      mb={15}
      w={185}
      py={"xl"}
      rounded={"2xl"}
    >
      <Icon
        fontSize={90}
        color="blue500"
        fontFamily="FontAwesome5"
        name={icon}
      />
      <Text color="blue500" textAlign="center" fontSize={"xl"} mt={"sm"}>
        {text}
      </Text>
    </Div>
  );
};

export default HomeButton;
