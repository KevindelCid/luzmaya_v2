import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { getImage } from "../../utils/images";
import { BrandColors } from "@/constants/Colors";

export const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={BrandColors.primary} />
      <View
        style={{
          backgroundColor: BrandColors.primary,
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
