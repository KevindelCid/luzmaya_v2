import { BrandColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { Pressable, Text, View } from "react-native";

export const Card = ({ onPress, children, style }) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 12,
        width: 115,
        height: 100,
        backgroundColor:
          colorScheme === "dark" ? BrandColors.bgDark : BrandColors.bgLight,

        ...style,
      }}
    >
      {children}
    </Pressable>
  );
};
