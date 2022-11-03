import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setRed((prev) => prev + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setRed((prev) => prev - COLOR_INCREMENT);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setGreen((prev) => prev + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setGreen((prev) => prev - COLOR_INCREMENT);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          setBlue((prev) => prev + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setBlue((prev) => prev - COLOR_INCREMENT);
        }}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
