import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  Text,
} from "react-native";
import HeaderNav from "../components/HeaderNav";
import JobCard from "../components/JobCard";
import { View } from "../components/Themed";
import { jobs } from "../data/JobData";
const [val] = "Approved";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function ReportsScreen({ navigation }: any) {
  return (
    <View>
      <ImageBackground
        style={{ width: wid, height: high / 7.51, position: "absolute" }}
        source={require("../assets/images/bg.png")}
      >
        <View
          style={{
            backgroundColor: "transparent",
            top: 5,
            left: 170,
            height: high / 3.8,
            alignSelf: "flex-end",
            width: wid / 1.68,
            justifyContent: "flex-start",
            position: "absolute",
          }}
        ></View>
        <HeaderNav navigation={navigation} name="Reports" header={"Report"} />
      </ImageBackground>
      <View
        style={{
          width: wid,
          height: high / 1.4,
          top: high / 5.7,
          alignSelf: "center",
        }}
      >
        <FlatList
          data={jobs}
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <>
              {item.jobStatus == "All Job" ? (
                <JobCard
                  key={item.key}
                  name={item.name}
                  date={item.date}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  button={"viwe Pdf"}
                  serialNum={item.serialNum}
                  rate={item.rate}
                  rating={item.rating}
                  cleanerName={item.cleanerName}
                  jobStatus="Reports"
                  navigation={navigation}
                />
              ) : null}
            </>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
