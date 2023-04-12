import React from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { View, Text } from "./Themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const high = Dimensions.get("screen").height;
const wid = Dimensions.get("screen").width;
export default function JobCard(props: any) {
  const {
    name,
    date,
    startTime,
    endTime,
    button,
    jobApproval,
    cleanerName,
    rate,
    rating,
    serialNum,
    jobStatus,
    navigation,
  } = props;
  const checkJobStatus = (jobStatus: any) => {
    if (jobStatus == "All Job") {
      return "Book";
    } else if (jobStatus == "Accepted") {
      return "Submitted";
    } else if (jobStatus == "Reports") {
      return "Approved";
    } else if (jobStatus == "History") {
      if (jobApproval == true) {
        return "Complete";
      } else {
        return "Cancel Booking";
      }
    }
  };
  const checkJob = (jobStatus: any) => {
    if (jobStatus == "History") {
      if (jobApproval == true) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
  const checkBooking = (jobStatus: any) => {
    if (jobStatus == "All Job") {
      console.log("hello");
      return true;
    } else if (jobStatus == "Reports") {
      return false;
    } else {
      console.log("bye");
    }
  };
  return (
    <>
      <View
        style={{
          alignSelf: "center",
          width: wid / 1.12,
          height: high / 6.04,
          borderColor: "#EDEDED",
          borderWidth: 1,
          borderRadius: 11,
          marginVertical: "2%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 17,
            height: 20,
            borderRadius: 20,
            top: 7,
          }}
        >
          <Text
            style={{
              color: "#C5A804",
              fontFamily: "Poppins-Regular",
              fontSize: 12,
            }}
          >
            {serialNum}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text
              style={{
                color: "#0F3C22",
                fontFamily: "Poppins-Medium",
                fontSize: 14,
              }}
            >
              {rate}
            </Text>
            <Text
              style={{
                color: "#B8B8B8",
                fontFamily: "Poppins-Medium",
                fontSize: 11,
                top: 3,
              }}
            >
              Hour
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.MockTestCard,
            styles.paddingInContainer,
            { marginTop: high / 171.16 },
          ]}
        >
          <Text
            allowFontScaling={false}
            style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}
          >
            {name}
          </Text>
        </View>
        <View
          style={[
            styles.paddingInContainer,
            styles.MockTestCard,
            {
              marginTop: high / 300.93,
              marginBottom: high / 20,
            },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Text allowFontScaling={false} style={styles.fontColor}>
              Date : {date}
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.fontColor, { marginLeft: wid / 64 }]}
            >
              {startTime} - {endTime}
            </Text>
          </View>
          {checkJob(jobStatus) ? (
            <View
              style={{
                width: wid / 4.71,
                left: wid / 40,
                height: high / 32.48,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  checkBooking(jobStatus)
                    ? navigation.navigate("BookJob", {
                        name: name,
                        rate: rate,
                        rating: rating,
                        date: date,
                        startTime: startTime,
                        endTime: endTime,
                        cleanerName: cleanerName,
                      } as never)
                    : navigation.navigate("ReportView", {
                        name: name,
                        rate: rate,
                        rating: rating,
                        date: date,
                        startTime: startTime,
                        endTime: endTime,
                        cleanerName: cleanerName,
                      } as never)
                }
                style={{
                  backgroundColor: "#DCF4E6",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "100%",
                  borderRadius: 40,
                }}
              >
                <Text
                  allowFontScaling={false}
                  style={{
                    color: "#144E2C",
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                    alignSelf: "center",
                  }}
                >
                  {checkJobStatus(jobStatus)}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                width: wid / 3.21,
                left: wid / 40,
                height: high / 32.48,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#F9EAEA",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "100%",
                  borderRadius: 40,
                }}
                //   onPress={() =>checkText(button) ? navigation.navigate("Test") : navigation.navigate("TestResult")}
              >
                <Text
                  allowFontScaling={false}
                  style={{
                    color: "#DE1818",
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                    alignSelf: "center",
                  }}
                >
                  {/* {checkJobStatus(jobStatus)} */}
                  Cancel Booking
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            bottom: high / 40,
            paddingHorizontal: 17,
            borderRadius: 20,
            height: 40,
            backgroundColor: "transparent",
          }}
        >
          <Image
            source={require("../assets/images/cleanerPro.png")}
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          {jobStatus == "Accepted" && (
            <>
              {jobApproval ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome5
                    name="check-double"
                    style={{ color: "#2D6343" }}
                  />
                  <Text
                    style={{
                      color: "#2D6343",
                      fontFamily: "Poppins-Regular",
                      marginHorizontal: 5,
                    }}
                  >
                    Approved
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome name="clock-o" style={{ color: "#E02525" }} />
                  <Text
                    style={{
                      color: "#E02525",
                      fontFamily: "Poppins-Regular",
                      marginHorizontal: 5,
                    }}
                  >
                    Waiting for approval
                  </Text>
                </View>
              )}
            </>
          )}
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 13 }}>
              {cleanerName}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <FontAwesome
                name="star"
                color={"#FDDC22"}
                size={10}
                style={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  color: "#1F1F1F",
                  fontSize: 12,
                }}
              >
                {rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  MockTestCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    align: "center",
  },
  paddingInContainer: {
    paddingHorizontal: wid / 19.2,
  },
  separator: {
    height: 1,
    bottom: 30,
    width: "100%",
    alignSelf: "center",
  },
  fontColor: {
    color: "#8A8A8A",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
});
