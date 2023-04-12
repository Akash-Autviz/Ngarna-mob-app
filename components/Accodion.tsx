import { StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import { Checkbox, List } from "react-native-paper";
import { hp, wp } from "../utils/metrics";
interface AccodionProps {
  accodionTitle: string;
 id:number
}
const Accodion: FC<AccodionProps> = ({ accodionTitle,id }: AccodionProps) => {
   const [isChecked, setisChecked] = useState<boolean|null>(null);
  return (
    <View style={{ borderRadius: 20, backgroundColor: "#ffff", width: wp(90) }}>
      <List.Accordion
        style={{
          backgroundColor: "#ffff",
          width: wp(90),
        }}
        title={accodionTitle}
        id={id}
      >
        <View style={styles.accordionContainer}>
          <Checkbox.Item
            onPress={(prev) => setisChecked(true)}
            label="Yes"
            status={
              isChecked
                ? "checked"
                : isChecked == null
                ? "unchecked"
                : "unchecked"
            }
          />
          <Checkbox.Item
            label="No"
            onPress={(prev) => setisChecked(false)}
            status={
              isChecked
                ? "unchecked"
                : isChecked == null
                ? "unchecked"
                : "checked"
            }
          />
        </View>
      </List.Accordion>
    </View>
  );
};

export default Accodion;

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: "#ffff",
    width: wp(90),
    flexDirection: "row",
    justifyContent: "flex-start",
     textAlign: "center",
    fontFamily: "Poppins-Bold",
   
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    
  },
});
