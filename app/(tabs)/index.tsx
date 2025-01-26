import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { getMayanDate, prettiDate, usableDate } from "@/utils/cholqij";
import { Container } from "@/components/Layout/Container";
import { Header } from "@/components/Layout/Header";
import { ContentContainer } from "@/components/Layout/ContentContainer";
import { MyDateTimePicker } from "@/components/ui/MyDateTimePicker";
import { InverseMayanCalc } from "@/components/ui/InverseMayanCalc";
import { Lunations } from "@/components/ui/Lunations";
import { Footer } from "@/components/Layout/Footer";
import { SplashScreen } from "expo-router";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as Application from "expo-application";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [lunations, setLunations] = useState({});
  const [selectedDate, setSelectedDate] = useState({
    usableDate: "",
    prettiDate: "",
    day: 0,
    month: 0,
    year: 0,
  });

  useEffect(() => {
    setLunations(getMayanDate(selectedDate.usableDate));

    const getReferrerData = async () => {
      const referrerData = await Application.getInstallReferrerAsync();
      console.log("code line-37 \n\r😉 referrerData:\n\r", referrerData);
    };
    getReferrerData();
  }, [selectedDate]);

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#2E2E3B" : "white",
      }}
    >
      <Header />
      <ContentContainer>
        <View
          style={{
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colorScheme === "dark" ? "white" : "black",
            }}
          >
            {selectedDate.prettiDate}
          </Text>
        </View>
        <MyDateTimePicker
          label={"Calcular Nawales"}
          setSelectedDate={setSelectedDate}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "67%", marginRight: "3%" }}>
            <InverseMayanCalc
              label={"Calcular a la inversa"}
              setSelectedDate={setSelectedDate}
            />
          </View>
          <View style={{ width: "30%" }}>
            <PrimaryButton
              label={"Hoy"}
              color={undefined}
              onPress={() => {
                const now = new Date();
                const localYear = now.getFullYear();
                const localMonth = now.getMonth();
                const localDay = now.getDate();

                // Establece esta fecha sin afectar por la zona horaria
                const date = new Date(localYear, localMonth, localDay, 0, 0, 0);

                setSelectedDate({
                  usableDate: usableDate(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                  ),
                  prettiDate: prettiDate(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                  ),
                  year: date.getFullYear(),
                  month: date.getMonth(),
                  day: date.getDate(),
                });
              }}
            />
          </View>
        </View>

        <Lunations lunations={lunations} />
      </ContentContainer>
      <Footer />
    </Container>
  );
}
