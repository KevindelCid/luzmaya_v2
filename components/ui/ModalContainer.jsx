import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, Pressable, Text, Modal, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ModalContainer = ({
  isVisible = false,
  children,
  onPress,
  onClose,
  whitOutMeaning = false,
}) => {
  const colorScheme = useColorScheme();

  return (
    isVisible && (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        style={{
          backgroundColor: colorScheme === "dark" ? "#2E2E3B" : "white",
        }}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              ...styles.modalContent,
              backgroundColor: colorScheme === "dark" ? "#444455" : "white",

              height: whitOutMeaning ? 340 : 600,
            }}
          >
            <Pressable
              style={{ position: "absolute", zIndex: 20, right: 20, top: 10 }}
              onPress={() => onClose()}
            >
              <Icon
                name="close"
                size={25}
                color={`${colorScheme === "dark" ? "white" : "black"}`}
              />
            </Pressable>

            {children && children}
          </View>
        </View>
      </Modal>
    )
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    width: 320,
    height: 700,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
});
