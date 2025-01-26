import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { getImage } from "../../utils/images";

export const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#444455" />
      <View
        style={{
          backgroundColor: "#444455",
          height: 80,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={getImage("luzmaya")}
          style={{ height: 150, width: 150 }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};
