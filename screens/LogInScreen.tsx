import { StackActions, useNavigation } from "@react-navigation/native";
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
  Animated,
  Alert,
} from "react-native";
import { Text, View } from "../components/Themed";
import client from "../network/cleint";
import {
  loadStringFromLocalStorage,
  saveStringInLocalStorage,
} from "../utils/storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp } from "../utils/metrics";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function LogInScreen({ navigation }: any) {
  const { dispatch } = useNavigation();
  const [isTyping, setisTyping] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setuserPassword] = useState<string>("");
  const toggleFocus = () => {};
  const toggleFocusOn = () => {};

  const LogIn = async (): Promise<void> => {
    let data: any = {
      userNameOrEmailAddress: userEmail,
      password: userPassword,
      rememberClient: false,
    };
    try {
      const res = await client.post("/api/TokenAuth/Authenticate", data);
      console.log(res);
      saveStringInLocalStorage("accessToken", res.data.result.accessToken);
      saveStringInLocalStorage(
        "encryptedAccessToken",
        res.data.result.encryptedAccessToken
      );
      
      dispatch(StackActions.replace("Root"));
    } catch (err) {
      Alert.alert("Invalid credentials", "Incorrect Email or Password", [
        { text: "Okay" },
      ]);
    }
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setisTyping(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setisTyping(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={{
            height: high / 2,
          }}
          source={require("../assets/images/bg.png")}
        >
          <TouchableWithoutFeedback onPress={toggleFocus}>
            <View
              style={{
                width: wid,
                flexDirection: "row",
                height: high / 2,
                marginTop: high / 40,
                backgroundColor: "transparent",
              }}
            >
              <View
                style={{
                  width: wid / 1.2,
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: wid / 12,
                  marginTop: -high / 7,
                  zIndex: 2,
                  marginRight: -high / 10,
                }}
              >
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title}>
                  Login
                  <Text
                    style={[
                      styles.title,
                      { color: "#84B498", backfaceVisibility: "hidden" },
                    ]}
                  >
                    {" "}
                    Inspector
                  </Text>
                </Text>
                <Text
                  style={{
                    width: wid / 1.5,
                    fontSize: hp("2%"),
                    color: "#FFFFFF",
                    marginTop: 20,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the fh print ing and
                  typesetting industry.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "transparent",
                  width: wid / 2,
                  height: high / 2,
                  zIndex: -1,
                }}
              >
                <ImageBackground
                  style={{
                    width: wid / 2,
                    height: high / 2.5,
                  }}
                  source={require("../assets/images/LoginCIrcle.png")}
                ></ImageBackground>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>

        <Animated.View
          style={[
            {
              justifyContent: "space-around",
              marginTop: isTyping === true ? -high / 4 : -high / 12,
              borderRadius: 40,
              height: hp("50%"),
              width: wid / 1.08,
              alignSelf: "center",
              backgroundColor: "#FFFF",
              paddingHorizontal: 30,
              paddingVertical: 20,
            },
            styles.shadowProp,
          ]}
        >
          <Text
            style={{
              fontSize: hp("3.5%"),
              fontWeight: "600",
              fontFamily: "Poppins-Medium",
            }}
          >
            Hi Andrea Halm
          </Text>

          <View style={{}}>
            <TouchableWithoutFeedback onPress={toggleFocus}>
              <View style={{ marginTop: 10 }}>
                <Text adjustsFontSizeToFit style={[styles.fontStyle]}>
                  To Start the insception write the ocde you got on SMS
                </Text>
                <TextInput
                  style={[styles.inputStyle]}
                  placeholder="Enter OTP"
                  keyboardType="numbers-and-punctuation"
                  onChangeText={(data) => setUserEmail(data)}
                />
              </View>
            </TouchableWithoutFeedback>

            <TouchableOpacity style={{ marginTop: hp("5%") }}>
              <Text
                adjustsFontSizeToFit
                style={[
                  styles.fontStyle,
                  { textAlign: "center", color: "#84B497", fontSize: hp("2%") },
                ]}
              >
                Didn't Receive Code ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Inspection")}
              style={{
                marginTop: hp("1%"),
                backgroundColor: "#104426",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                adjustsFontSizeToFit
                style={[
                  styles.fontStyle,
                  { color: "#ffff", padding: 10, fontWeight: "800" },
                ]}
              >
                Sign in &rarr;
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #F5F5F5;",
    position: "relative",
  },
  title: {
    fontSize: hp("4.5%"),
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
  link: {
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
    fontSize: hp("2%"),
    color: "#929292",
  },
  inputStyle: {
    marginTop: 10,
    borderColor: "#DBDBDB",
    borderWidth: 1.4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: high / 19,
    borderRadius: 5,
    fontSize: hp("2%"),
  },
});

// import { StackActions, useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   ImageBackground,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Animated,
//   Alert,
// } from "react-native";
// import { Text, View } from "../components/Themed";
// import client from "../network/cleint";
// import {
//   loadStringFromLocalStorage,
//   saveStringInLocalStorage,
// } from "../utils/storage";

// const wid = Dimensions.get("screen").width;
// const high = Dimensions.get("screen").height;
// export default function LogInScreen({ navigation }: any) {
//   const { dispatch } = useNavigation();
//   const [isTyping, setisTyping] = useState(false);
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [userPassword, setuserPassword] = useState<string>("");
//   const toggleFocus = () => {};
//   const toggleFocusOn = () => {};

//   const LogIn = async (): Promise<void> => {
//     let data: any = {
//       userNameOrEmailAddress: userEmail,
//       password: userPassword,
//       rememberClient: false,
//     };
//     try {
//       const res = await client.post("/api/TokenAuth/Authenticate", data);
//       console.log(res);
//       saveStringInLocalStorage("accessToken", res.data.result.accessToken);
//       saveStringInLocalStorage(
//         "encryptedAccessToken",
//         res.data.result.encryptedAccessToken
//       );

//       dispatch(StackActions.replace("Root"));
//     } catch (err) {
//       Alert.alert("Invalid credentials", "Incorrect Email or Password", [
//         { text: "Okay" },
//       ]);
//     }
//   };
//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
//       setisTyping(true);
//     });
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
//       setisTyping(false);
//     });

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);
//   return (
//     <>
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <ImageBackground
//           style={{
//             height: high / 2,
//           }}
//           source={require("../assets/images/bg.png")}
//         >
//           <TouchableWithoutFeedback onPress={toggleFocus}>
//             <View
//               style={{
//                 width: wid,
//                 flexDirection: "row",
//                 height: high / 2,
//                 marginTop: high / 40,
//                 backgroundColor: "transparent",
//               }}
//             >
//               <View
//                 style={{
//                   width: wid / 1.2,
//                   backgroundColor: "transparent",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                   padding: wid / 12,
//                   marginTop: -high / 7,
//                   zIndex: 2,
//                   marginRight: -high / 10,
//                 }}
//               >
//                 <Text style={styles.title}>Welcome to</Text>
//                 <Text style={styles.title}>
//                   Login
//                   <Text
//                     style={[
//                       styles.title,
//                       { color: "#84B498", backfaceVisibility: "hidden" },
//                     ]}
//                   >
//                     {" "}
//                     Inspector
//                   </Text>
//                 </Text>
//                 <Text
//                   style={{
//                     width: wid / 1.5,
//                     fontSize: 16,
//                     color: "#FFFFFF",
//                     marginTop: 20,
//                   }}
//                 >
//                   Lorem Ipsum is simply dummy text of the fh print ing and
//                   typesetting industry.
//                 </Text>
//               </View>

//               <View
//                 style={{
//                   backgroundColor: "transparent",
//                   width: wid / 2,
//                   height: high / 2,
//                   zIndex: -1,
//                 }}
//               >
//                 <ImageBackground
//                   style={{
//                     width: wid / 2,
//                     height: high / 2.5,
//                   }}
//                   source={require("../assets/images/LoginCIrcle.png")}
//                 ></ImageBackground>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </ImageBackground>

//         <Animated.View
//           style={[
//             {
//               marginTop: isTyping === true ? -high / 4 : -high / 12,
//               borderRadius: 40,
//               height: high / 1.98,
//               width: wid / 1.08,
//               alignSelf: "center",
//               backgroundColor: "#FFFFFF",
//               paddingHorizontal: 30,
//               paddingVertical: 20,
//             },
//             styles.shadowProp,
//           ]}
//         >
//           <Text
//             style={{
//               fontSize: 40,
//               fontWeight: "600",
//               fontFamily: "Poppins-Medium",
//             }}
//           >
//             Sign in
//           </Text>

//           <View style={{ marginTop: 10 }}>
//             <TouchableWithoutFeedback onPress={toggleFocus}>
//               <View style={{ marginTop: 10 }}>
//                 <Text adjustsFontSizeToFit style={[styles.fontStyle]}>
//                   Enter Your Email
//                 </Text>
//                 <TextInput
//                   style={[styles.inputStyle]}
//                   placeholder="Email"
//                   onChangeText={(data) => setUserEmail(data)}
//                 />
//               </View>
//             </TouchableWithoutFeedback>

//             <View style={{ marginTop: 10 }} onTouchCancel={toggleFocusOn}>
//               <Text adjustsFontSizeToFit style={[styles.fontStyle]}>
//                 Enter Your Password
//               </Text>
//               <TextInput
//                 onChangeText={(data) => setuserPassword(data)}
//                 style={[styles.inputStyle]}
//                 placeholder="Password"
//                 onPressIn={toggleFocusOn}
//               />
//             </View>

//             <TouchableOpacity style={{ marginTop: 10 }}>
//               <Text
//                 adjustsFontSizeToFit
//                 style={[styles.fontStyle, { color: "#84B497", fontSize: 20 }]}
//               >
//                 Recovery Password
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => LogIn()}
//               style={{
//                 marginTop: 10,
//                 backgroundColor: "#104426",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 10,
//               }}
//             >
//               <Text
//                 adjustsFontSizeToFit
//                 style={[
//                   styles.fontStyle,
//                   { color: "#ffff", padding: 10, fontWeight: "800" },
//                 ]}
//               >
//                 Sign in &rarr;
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 marginTop: 12,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 adjustsFontSizeToFit
//                 style={[
//                   styles.fontStyle,
//                   {
//                     color: "#84B497",
//                     fontSize: 19,
//                   },
//                 ]}
//               >
//                 Sign Up
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </KeyboardAvoidingView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: " #F5F5F5;",
//     position: "relative",
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: "700",
//     color: "#FFFFFF",
//     fontFamily: "Poppins-Medium",
//   },
//   link: {
//     paddingVertical: 15,
//   },
//   shadowProp: {
//     // shadowOffset: { width: 10, height: 0 },
//     // shadowColor: "black",
//     // shadowOpacity: 0.2,
//     // shadowRadius: 15,
//   },
//   fontStyle: {
//     fontFamily: "Poppins-Medium",
//     fontSize: 22,
//     color: "#929292",
//   },
//   inputStyle: {
//     marginTop: 10,
//     borderColor: "#DBDBDB",
//     borderWidth: 1.4,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     height: high / 19,
//     borderRadius: 5,
//     fontSize: 23,
//   },
// });
