import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { View, Text } from "../components/Themed";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
function HeaderNav(props: any) {
  const { header } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.RectangleMenuContainer}
        onPress={() => props.navigation.navigate("Home")}
      >
        <View style={{ backgroundColor: "#FAFAFB" }}>
          <Image
            style={styles.RectangleImgContainer}
            resizeMode="cover"
            source={require("../assets/images/ReactanglemenuBar/MenuRectange1.png")}
          ></Image>
          <Image
            style={styles.RectangleImgContainer}
            resizeMode="cover"
            source={require("../assets/images/ReactanglemenuBar/MenuRectange3.png")}
          ></Image>
        </View>

        <View>
          <Image
            style={styles.RectangleImgContainer}
            resizeMode="cover"
            source={require("../assets/images/ReactanglemenuBar/MenuRectange2.png")}
          ></Image>
          <Image
            style={styles.RectangleImgContainer}
            resizeMode="cover"
            source={require("../assets/images/ReactanglemenuBar/MenuRectange4.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      {props.name == "Reports" ? (
        <View
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              alignSelf: "center",
              top: 5,
              color: "#FFF",
              left: 15,
            }}
          >
            {header ? header : "Reports"}
          </Text>
        </View>
      ) : null}
      <View style={styles.profileConatiner}>
        <View
          style={{ paddingRight: wid / 38.4, backgroundColor: "transparent" }}
        >
          <Image
            style={{ backgroundColor: "transparent", tintColor: "white" }}
            resizeMode="cover"
            source={require("../assets/images/bell_icon.png")}
          ></Image>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Setting")}
          >
            <Image
              resizeMode="cover"
              style={{ borderRadius: 10, backgroundColor: "#175631" }}
              source={require("../assets/images/profilePic.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // top: high/32.7,
    height: high / 7.2,
    // marginBottom: high/42.7,
  },

  profileConatiner: {
    display: "flex",
    flexDirection: "row",
    marginTop: high / 60.8,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  RectangleMenuContainer: {
    marginTop: high / 60.8,
    borderRadius: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 8,
  },
  RectangleImgContainer: {
    margin: 2,
  },
});
export default HeaderNav;
