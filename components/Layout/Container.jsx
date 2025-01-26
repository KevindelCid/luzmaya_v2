import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const Container = ({ children, style }) => {
  return (
    <SafeAreaProvider style={{ ...style }}>
      <SafeAreaView>
        <SafeAreaView>
          <ScrollView>{children}</ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
