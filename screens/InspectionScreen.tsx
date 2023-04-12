import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import SplashScreen from "../components/SplashScreen";
import { Text, View } from "../components/Themed";
import LogInScreenStep1 from "../components/LogInScreenStep1";
import { useStateContext } from "../Context/ContextProvider";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function InspectionScreen({ navigation }: any) {
  return (
    <>
      <View style={{ height: high, width: wid }}>
        <ImageBackground
          style={{
            height: high,
          }}
          source={require("../assets/images/bg.png")}
        ></ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  step1: {
    flex: 1,
    width: wid,
    height: high,
  },
  fontStyle: {
    padding: 0,
    margin: 0,
    fontSize: 49,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
});
