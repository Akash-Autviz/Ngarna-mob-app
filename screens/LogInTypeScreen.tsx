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
import { hp } from "../utils/metrics";

const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function LogInTypeScreen({ navigation }: any) {
  const { setUserType } = useStateContext();
  const [splashScreenTimeout, setsplashScreenTimeout] = useState(true);
  const [afterSplashTimout, setafterSplashTimout] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setsplashScreenTimeout(false);
    }, 2000);
    if (!splashScreenTimeout == false) {
      setTimeout(() => {
        setafterSplashTimout(false);
      }, 3000);
    }
  }, []);

  const setUser = (user: string) => {
    setUserType(user);
    navigation.navigate("Login");
  };

  return (
    <>
      {splashScreenTimeout === true ? (
        <SplashScreen />
      ) : afterSplashTimout === true ? (
        <LogInScreenStep1 />
      ) : (
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
                  height: hp("53%"),
                  paddingVertical: high / 20,
                  width: wid / 1.3,
                  backgroundColor: "transparent",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                }}
              >
                <View
                  style={{
                    backgroundColor: "transparent",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    adjustsFontSizeToFit
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: 29,
                      fontWeight: "800",
                      color: "white",
                    }}
                  >
                    Continue with us.
                  </Text>
                  <Text
                    adjustsFontSizeToFit
                    style={{
                      fontFamily: "Poppins-Bold",
                      fontSize: hp("3.5%"),
                      fontWeight: "300",
                      color: "white",
                    }}
                  >
                    WHO ARE YOU ?
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "transparent",
                    height: high / 6,
                    width: wid / 1.3,
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setUser("Cleaner")}
                    style={{
                      height: high / 15,
                      width: wid / 1.3,
                      backgroundColor: "#FDDC22",
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      allowFontScaling={false}
                      adjustsFontSizeToFit
                      style={{
                        color: "black",
                        fontFamily: "Poppins-Medium",
                        fontWeight: "800",
                        fontSize: 16,
                      }}
                    >
                      Cleaner
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setUser("Guest")}
                    style={{
                      height: high / 15,
                      width: wid / 1.3,
                      backgroundColor: "#EEE8EF",
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      allowFontScaling={false}
                      adjustsFontSizeToFit
                     
                      style={{
                        color: "black",
                        fontFamily: "Poppins-Medium",
                        fontWeight: "800",
                        fontSize: 16,
                      }}
                    >
                      Guest
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
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
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

// class Login extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.textWrapper}>
//           <Text style={styles.myText}>Login</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   textWrapper: {
//     height: hp("70%"), // 70% of height device screen
//     width: wp("80%"), // 80% of width device screen
//   },
//   myText: {
//     fontSize: hp("5%"), // End result looks like the provided UI mockup
//   },
// });

// export default Login;