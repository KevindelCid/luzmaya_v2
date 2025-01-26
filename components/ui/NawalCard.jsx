import React, { useState } from "react";
import { Card } from "./Card";
import { Image, Text, View, ScrollView } from "react-native";
import { ModalContainer } from "./ModalContainer";
import { infoNawals } from "../../utils";
import { useColorScheme } from "@/hooks/useColorScheme";

export const NawalCard = ({
  imageSource,
  day,
  nawalName,
  title,
  onPress,
  isSolarDay,
}) => {
  const colorScheme = useColorScheme();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const nawalInfo = infoNawals.find((item) => item.nawal === nawalName);

  return (
    <View>
      <ModalContainer
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        whitOutMeaning={!nawalInfo?.meaning}
      >
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colorScheme === "dark" ? "#444455" : "white",
            }}
          >
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 35,
                fontWeight: "800",
                color: colorScheme === "dark" ? "white" : "black",
              }}
            >
              {nawalInfo?.nawal}
            </Text>

            <Image
              source={imageSource()}
              style={{
                width: 200,
                height: 200,
                marginBottom: 20,
                tintColor:
                  colorScheme === "dark" && isSolarDay ? "white" : undefined,
              }}
              resizeMode="contain"
            />

            {nawalInfo?.meaning && (
              <View
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    color: colorScheme === "dark" ? "white" : "black",
                  }}
                >
                  {nawalInfo?.meaning}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    alignSelf: "center",
                    color: colorScheme === "dark" ? "white" : "black",
                  }}
                >
                  Positivo
                </Text>
                <Text
                  style={{
                    color: colorScheme === "dark" ? "white" : "black",
                  }}
                >
                  {nawalInfo?.positive.join(", ")}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    alignSelf: "center",
                    color: colorScheme === "dark" ? "white" : "black",
                  }}
                >
                  Negativo
                </Text>
                <Text
                  style={{ color: colorScheme === "dark" ? "white" : "black" }}
                >
                  {nawalInfo?.negative.join(", ")}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </ModalContainer>
      <Card
        onPress={() => {
          setIsModalVisible(true);
        }}
        style={{ zIndex: 2, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={imageSource()}
          style={{
            width: 50,
            height: 50,
            tintColor:
              colorScheme === "dark" && isSolarDay ? "white" : undefined,
          }}
          resizeMode="contain"
        />
        <Text
          style={{ color: colorScheme === "dark" ? "white" : "black" }}
        >{`${day}, ${nawalName}`}</Text>
        <Text style={{ color: colorScheme === "dark" ? "white" : "black" }}>
          {title}
        </Text>
      </Card>
    </View>
  );
};
