import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SplashScreen from "../components/SplashScreen";

import { Text, View } from "../components/Themed";
import { LoginStep2 } from "../assets";
import { SafeAreaView } from "react-native-safe-area-context";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
const LogInScreenStep1 = () => {
  return (
    <View style={styles.step1}>
      <ImageBackground
        style={{
          height: high,
        }}
        source={require("../assets/images/bg.png")}
      >
        <SafeAreaView style={{ backgroundColor: "transparent" }}>
          <View
            style={{
              paddingTop: high / 30,
              backgroundColor: "transparent",
              paddingHorizontal: wid / 12,
            }}
          >
            <Text style={[styles.fontStyle]}>Best Solution</Text>
            <Text style={[styles.fontStyle]}>
              For Yours{" "}
              <Text style={[styles.fontStyle, { color: "#84B498" }]}>
                House
              </Text>
            </Text>
            <Text style={[styles.fontStyle, { fontSize: 18 }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View
            style={{
              paddingTop: high / 6.8,
              height: high / 1,
              backgroundColor: "transparent",
              alignItems: "flex-end",
            }}
          >
            <Image
              style={{
                position: "relative",
              }}
              source={require("../assets/images/decoration.png")}
            ></Image>
            <Image
              style={{
                position: "absolute",
                top: high / 3.69,
              }}
              resizeMode="cover"
              source={require("../assets/images/4151505.png")}
            ></Image>
            <View
              style={{
                alignSelf: "flex-start",
                marginLeft: 40,
                height: high / 6.5,
                width: wid,
                backgroundColor: "transparent",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                }}
                resizeMode="cover"
                source={require("../assets/images/dots.png")}
              ></Image>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LogInScreenStep1;
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
