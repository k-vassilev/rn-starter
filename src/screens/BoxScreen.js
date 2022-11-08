import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { max } from "react-native-reanimated";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  viewOneStyle: {
    borderWidth: 1,
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    borderWidth: 1,
    backgroundColor: "green",
    height: 50,
    width: 50,
    marginTop: 50,
  },
  viewThreeStyle: {
    borderWidth: 1,
    backgroundColor: "purple",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
