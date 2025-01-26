import React from "react";
import { View, Text, Pressable } from "react-native";

export const PrimaryButton = ({
  label,
  onPress = () => {},
  color = null,
  style = {},
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          borderRadius: 12,
          minHeight: 40,
          width: "100%",
          backgroundColor: color || "#444455",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ color: "#fff" }}>{label}</Text>
      </View>
    </Pressable>
  );
};
