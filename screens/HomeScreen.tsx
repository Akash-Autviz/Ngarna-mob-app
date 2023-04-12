import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { List } from "react-native-paper";
import HeaderNav from "../components/HeaderNav";
import JobCard from "../components/JobCard";
import { Text, View } from "../components/Themed";
import { jobs } from "../data/JobData";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;

export default function HomeScreen({ navigation }: any) {
  const [res, setRes] = useState("All");
  const [color, setColor] = useState(true);
  const [color1, setColor1] = useState(false);
  const [val, setValue] = useState("Book");
  const [color2, setColor2] = useState(false);
const [expanded, setExpanded] = React.useState(true);

const handlePress = () => setExpanded(!expanded);
  const onPress = (text: string) => {
    setRes(text);
    if (text == "All") {
      setColor(true);
      setColor1(false);
      setColor2(false);
    } else if (text == "Accepted") {
      setColor(false);
      setColor1(true);
      setColor2(false);
    } else {
      setColor(false);
      setColor1(false);
      setColor2(true);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: wid, height: high / 2.51, position: "absolute" }}
        source={require("../assets/images/bg.png")}
      >
        <HeaderNav navigation={navigation} />
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "transparent",
              width: wid / 2,
              bottom: high / 11.53,
              position: "absolute",
              alignSelf: "flex-start",
              height: high / 6,
              left: wid / 20,
            }}
          >
            <Text
              style={{
                fontSize: high / 47.76,
                color: "white",
                fontFamily: "Poppins-Medium",
              }}
            >
              Hi Cleaner
            </Text>
            <Text
              style={{
                fontSize: high / 35.23,
                top: high / 82,
                color: "white",
                fontFamily: "Poppins-Medium",
              }}
            >
              What service do you need?
            </Text>
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
            }}
          >
            <Image
              source={require("../assets/images/rings.png")}
              style={{ position: "absolute", alignSelf: "flex-end" }}
            />
            <Image
              source={require("../assets/images/cleaner.png")}
              style={{ position: "absolute", alignSelf: "flex-end" }}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          width: "100%",
          height: 120,
          backgroundColor: "#FFFFFF",
          top: high / 2.55,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "91%",
            height: high / 17,
            marginBottom: high / 62.7,
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 116,
            borderWidth: 1,
            borderColor: "#EEEEEE",
            backgroundColor: "#FFFFFF",
          }}
        >
          <TouchableOpacity
            onPress={() => onPress("All")}
            style={{
              backgroundColor: color ? "#FDDC22" : "#FFFFFF",
              height: "100%",
              width: "30%",
              justifyContent: "center",
              borderRadius: 116,
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: "black",
                alignSelf: "center",
                fontFamily: "Poppins-Medium",
                fontSize: 15,
              }}
            >
              All Jobs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPress("Accepted")}
            style={{
              backgroundColor: color1 ? "#FDDC22" : "#FFFFFF",
              borderRadius: 116,
              height: "100%",
              width: "39%",
              justifyContent: "center",
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: "black",
                alignSelf: "center",
                fontFamily: "Poppins-Medium",
                fontSize: 15,
              }}
            >
              Accepted Jobs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPress("History")}
            style={{
              backgroundColor: color2 ? "#FDDC22" : "#FFFFFF",
              height: "100%",
              borderRadius: 116,
              left: 3,
              width: "30%",
              justifyContent: "center",
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: "black",
                alignSelf: "center",
                fontFamily: "Poppins-Medium",
                fontSize: 15,
              }}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {res == "All" ? (
        <View
          style={{
            width: wid,
            height: high / 2.7,
            top: high / 2.7,
            alignSelf: "center",
          }}
        >
          <List.AccordionGroup>
            <List.Accordion title="Accordion 1" id="1">
              <Checkbox.Item label="Item" status="checked" />
            </List.Accordion>
          </List.AccordionGroup>
          <View></View>
          {/* <FlatList
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
                    button={val}
                    serialNum={item.serialNum}
                    rate={item.rate}
                    rating={item.rating}
                    cleanerName={item.cleanerName}
                    jobStatus={item.jobStatus}
                    navigation={navigation}
                  />
                ) : null}
              </>
            )}
          /> */}
        </View>
      ) : null}
      {/*
      {res == "Accepted" ? (
        <View
          style={{
            width: wid,
            height: high / 2.7,
            top: high / 2.7,
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
                {item.jobStatus == "Accepted" ? (
                  <JobCard
                    key={item.key}
                    name={item.name}
                    date={item.date}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    button={val}
                    serialNum={item.serialNum}
                    rate={item.rate}
                    rating={item.rating}
                    cleanerName={item.cleanerName}
                    jobStatus={item.jobStatus}
                    jobApproval={item.jobApproval}
                  />
                ) : null}
              </>
            )}
          />
        </View>
      ) : null}
      {res == "History" ? (
        <View
          style={{
            width: wid,
            height: high / 2.7,
            top: high / 2.7,
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
                {item.jobStatus == "History" ? (
                  <JobCard
                    key={item.key}
                    name={item.name}
                    date={item.date}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    button={val}
                    serialNum={item.serialNum}
                    rate={item.rate}
                    rating={item.rating}
                    cleanerName={item.cleanerName}
                    jobStatus={item.jobStatus}
                    jobApproval={item.jobApproval}
                    navigation={navigation}
                  />
                ) : null}
              </>
            )}
          />
        </View>
      ) : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: high / 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  MockTestCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    height: 1,
    bottom: 30,
    width: "100%",
    alignSelf: "center",
  },
  paddingInContainer: {
    paddingHorizontal: wid / 19.2,
  },
  fontColor: {
    color: "#8A8A8A",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
