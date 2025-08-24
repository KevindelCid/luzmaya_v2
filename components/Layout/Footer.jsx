import React from "react";
import { Text, View, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { phrases } from "../../utils/info";

export const Footer = () => {
  return (
    <>
      <View
        style={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: "#444455",
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
          style={{ color: "white", textAlign: "justify", marginBottom:0 }}
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
          {phrases.develpment.message + " " + phrases.develpment.developer.name }
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
