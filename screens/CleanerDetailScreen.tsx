import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ProfiledDecoration, Upload } from "../assets";
import CustomBtn from "../components/CustomBtn";
import HeaderNav from "../components/HeaderNav";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
const CleanerDetailScreen = ({ navigation }: any) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ width: wid, height: high / 4 }}>
        <Image
          style={{ width: wid }}
          resizeMode="cover"
          source={require("../assets/images/jobview.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          height: high / 15,
          bottom: high / 4.6,
          justifyContent: "space-between",
          width: wid,
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            left: 20,
            width: 35,
            height: 35,
            backgroundColor: "#FFF",
          }}
        >
          <Image
            style={{ alignSelf: "center" }}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 22,
            color: "#FFF",
            alignSelf: "center",
          }}
        >
          Cleaner Report
        </Text>
        <Image
          style={{ alignSelf: "center", right: 30 }}
          source={require("../assets/images/dots.png")}
        />
      </View>
      <ScrollView
        style={{
          width: wid,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",

          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ alignSelf: "center" }}
            source={require("../assets/images/slider.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 0 }}>
          <Text
            style={{
              color: "#000000",
              fontFamily: "Poppins-Regular",
              fontSize: 40,
            }}
          >
            Details
          </Text>
          <View style={{ marginTop: high / 65 }}>
            <Text style={[styles.fontStyle]}>Name</Text>
            <TextInput style={[styles.inputStyle]} placeholder="Name" />
          </View>
          <View style={{ marginTop: high / 65 }}>
            <Text style={[styles.fontStyle]}>Personal Number</Text>
            <TextInput
              style={[styles.inputStyle]}
              placeholder="Personal Number"
            />
          </View>
          <View style={{ marginTop: high / 65 }}>
            <Text style={[styles.fontStyle]}>Contact Details</Text>
            <TextInput
              style={[styles.inputStyle]}
              placeholder="Contact Details"
            />
          </View>
          <View style={{ marginTop: high / 65 }}>
            <Text style={[styles.fontStyle]}>Take Selfie</Text>
            <TouchableOpacity
              style={{
                borderColor: "#DBDBDB",
                width: wid / 2.5,
                borderWidth: 1.4,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                height: high / 10,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "dashed",
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Upload />
                <Text
                  style={{ color: "#8A8A8A", fontFamily: "Poppins-Regular" }}
                >
                  Upload Image
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}
          <Text
            style={[
              styles.fontStyle,
              { color: "#888888", paddingHorizontal: 30, marginTop: 10 },
            ]}
          >
            I agree an the terms and conditions
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: "space-between",
            width: wid,
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
            paddingVertical: 10,
            borderTopColor: "#F5F5F5",
            borderTopWidth: 2,
          }}
        >
          <CustomBtn
            title={"Cancel"}
            textColor={"#989898"}
            borderColor={"#E9E9E9"}
            bgColor={"#FFFFFF"}
            bdrWidth={"1"}
          />
          <CustomBtn
            title={"Submit"}
            textColor={"#000000"}
            borderColor={"#E9E9E9"}
            bgColor={"#FDDC22"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CleanerDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #F5F5F5;",
    position: "relative",
  },

  fontStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#494949",
  },
  inputStyle: {
    marginTop: 10,
    borderColor: "#DBDBDB",
    borderWidth: 1.4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: high / 19,
    borderRadius: 5,
    fontSize: 23,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
