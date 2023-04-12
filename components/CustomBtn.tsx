import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { Text, View } from "./Themed";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
const CustomBtn = (props: any) => {
  const { title, textColor, bdrWidth,borderColor, bgColor } = props;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor,

        borderRadius: 50,
        paddingHorizontal: wid / 8,
        paddingVertical: high / 50,
        backgroundColor: bgColor,
        borderWidth: bdrWidth,
      }}
    >
      <Text
        style={{ fontSize: 20, fontFamily: "Poppins-Medium", color: textColor }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
