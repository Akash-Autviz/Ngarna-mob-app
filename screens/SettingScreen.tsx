import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  
} from "react-native";
import { ProfiledDecoration } from "../assets";
import HeaderNav from "../components/HeaderNav";

import { Text, View } from "../components/Themed";
import { wipeAllKeysFromLocalStorage } from "../utils/storage";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function SettingScreen({ navigation }: any) {
const {dispatch} = useNavigation();
  const logOutFromApp = async (): Promise<void> => {
 await wipeAllKeysFromLocalStorage();
dispatch(StackActions.replace("Login"));
};
  return (
    <>
      <View style={{ flex: 1 }}>
        <View>
          <ImageBackground
            style={{ width: wid, height: high / 2.51 }}
            source={require("../assets/images/bg.png")}
          >
            <HeaderNav navigation={navigation} />
            <View style={styles.container}>
              <View
                style={{
                  marginTop: 0,
                  flexDirection: "column",
                  backgroundColor: "transparent",
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transpanrent",
                  }}
                >
                  <Image
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      backgroundColor: "transparent",
                    }}
                    resizeMode="cover"
                    source={require("../assets/images/UserProfilePic.png")}
                  />
                </View>
                <Text
                  style={{
                    fontSize: high / 35.23,
                    top: high / 82,
                    color: "white",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  Rose Bertrem
                </Text>
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: high / 60,
                    color: "white",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  Lorem Ipsum is simply dummy text of
                </Text>

                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    backgroundColor: "#FDDC22",
                    alignItems: "center",
                    justifyContent: "center",
                    height: high / 23,
                    paddingVertical: 8,
                    paddingHorizontal: 25,
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: high / 55,
                      fontFamily: "Poppins-Medium",
                    }}
                  >
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "transparent",
                  top: 1,
                  height: high / 3.8,
                  alignSelf: "flex-end",
                  width: wid / 1.68,
                  justifyContent: "center",
                  position: "absolute",
                  zIndex: -1,
                }}
              >
                <ProfiledDecoration
                  height={high / 4}
                  style={{
                    position: "absolute",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                  }}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <Text
          style={{
            marginTop: 10,
            paddingVertical: 10,
            fontFamily: "Poppins-Bold",
            flexDirection: "row",
            fontSize: 20,
            justifyContent: "center",
            width: "91%",
            alignSelf: "center",
            color: "#959595",
          }}
        >
          Help and Setting
        </Text>
        <View
          style={{
            marginTop: 2,
            backgroundColor: "#FFFFFF",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "91%",
              height: high / 17,
              marginBottom: high / 62.7,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#EEEEEE",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome name="file-text-o" size={25} color="black" />
              <Text
                style={{
                  marginLeft: 18,
                  fontFamily: "Poppins-Medium",
                  fontSize: 20,
                }}
              >
                Terms and Conditions
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "91%",
              height: high / 17,
              marginBottom: high / 62.7,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#EEEEEE",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome name="question-circle-o" size={25} color="black" />
              <Text
                style={{
                  marginLeft: 18,
                  fontFamily: "Poppins-Medium",
                  fontSize: 20,
                }}
              >
                Help
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "91%",
              height: high / 17,
              marginBottom: high / 62.7,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#EEEEEE",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome name="share-alt" size={25}></FontAwesome>
              <Text
                style={{
                  marginLeft: 18,
                  fontFamily: "Poppins-Medium",
                  fontSize: 20,
                }}
              >
                Share App
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "91%",
              height: high / 17,
              marginBottom: high / 62.7,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#EEEEEE",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Octicons name="key" size={25} color="black" />
              <Text
                style={{
                  marginLeft: 18,
                  fontFamily: "Poppins-Medium",
                  fontSize: 20,
                }}
              >
                Forget Password
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "91%",
              height: high / 17,
              marginBottom: high / 62.7,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#EEEEEE",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={25}
                color="black"
              />
              <Text
                style={{
                  marginLeft: 18,
                  fontFamily: "Poppins-Medium",
                  fontSize: 20,
                }}
              >
                Chat
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate("CleanerDetail")}
            onPress={() => logOutFromApp()}
            style={{
              marginTop: 2,
              paddingVertical: 10,
              paddingHorizontal: 30,
              width: wid / 2.5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#16512E",
              height: high / 17,
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#FFFFFF",
                fontSize: 18,
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #F5F5F5;",
    position: "relative",
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  shadowProp: {
    // shadowOffset: { width: 10, height: 0 },
    // shadowColor: "black",
    // shadowOpacity: 0.2,
    // shadowRadius: 15,
  },
  fontStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#929292",
  },
  inputStyle: {
    marginTop: 2,
    borderColor: "#DBDBDB",
    borderWidth: 1.4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: high / 18,
    borderRadius: 5,
    fontSize: 23,
  },
});
