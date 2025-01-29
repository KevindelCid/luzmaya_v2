import React from "react";
import { Text, View, Pressable, Linking, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { phrases } from "../../utils/info";
import { BrandColors } from "@/constants/Colors";
import * as Application from "expo-application";
export const Footer = () => {
  return (
    <>
      <View
        style={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: BrandColors.primary,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "justify", marginBottom: 10 }}
        >
          {phrases.footerMessage}
        </Text>
        <Text
          style={{ color: "white", textAlign: "justify", marginBottom: 10 }}
        >
          {phrases.copyRight}
        </Text>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "white",
            textAlign: "justify",
            marginBottom: 10,
          }}
        >
          {phrases.develpment.message + " " + phrases.develpment.developer.name}
        </Text>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{ marginRight: 30 }}
            onPress={() =>
              Linking.openURL(phrases.develpment.developer.githubUrl)
            }
            onLongPress={async () => {
              const referrerData = await Application.getInstallReferrerAsync();
              Alert.alert(
                "Install Referrer",
                referrerData.toString() + "develper section... ignore this"
              );
            }}
          >
            <Icon name="github" size={25} color="#fff" />
          </Pressable>
          <Pressable
            style={{ marginRight: 30 }}
            onPress={() =>
              Linking.openURL(phrases.develpment.developer.linkedinUrl)
            }
          >
            <Icon name="linkedin" size={25} color="#fff" />
          </Pressable>
          {/* <Pressable
            style={{ marginRight: 30 }}
            onPress={() =>
              Linking.openURL(phrases.develpment.developer.website)
            }
          >
            <Icon name="window-maximize" size={25} color="#fff" />
          </Pressable> */}
        </View>
      </View>
    </>
  );
};
