import React, { useState } from "react";
import { Dimensions, ImageBackground, Image } from "react-native";

import { Text, View } from "../components/Themed";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
const SplashScreen = ({ navigation }: any) => {
  const cover = false;
  return (
    <View style={{ height: high, width: wid }}>
      <ImageBackground
        style={{
          height: high,
        }}
        source={require("../assets/images/bg.png")}
      >
        <Image
          resizeMode="cover"
          source={require("../assets/images/LogInTypeCircle.png")}
        />

        <View
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ marginTop: high / 10 }}
            resizeMode="cover"
            source={require("../assets/images/LogInTypeFullCircle.png")}
          />

          <View
            style={{
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "BebasNeue",
                fontSize: 60,
              }}
            >
              NGARNA 310
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
