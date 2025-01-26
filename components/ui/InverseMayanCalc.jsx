import React, { useState } from "react";
// import { View, Text, Pressable } from "react-native";
// import { getGregorianDate, prettiDate, usableDate } from "../../utils/cholqij";
import { PrimaryButton } from "./PrimaryButton";
import { ModalContainer } from "./ModalContainer";
import { Carrousel } from "../Layout/Carrousel";

export const InverseMayanCalc = ({ label, setSelectedDate }) => {
  const [nawal, setNawal] = useState("");
  const [energy, setEnergy] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModalContainer
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Carrousel
          setSelectedDate={setSelectedDate}
          setNawal={setNawal}
          setEnergy={setEnergy}
          setModalVisible={setModalVisible}
        />
      </ModalContainer>

      <PrimaryButton
        label={"Calcular a la inversa"}
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </>
  );
};
