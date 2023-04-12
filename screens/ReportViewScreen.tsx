import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "../components/Themed";

import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function ReportViewScreen(props: any) {
  console.log(props.route.params);
  const { name, date, startTime, endTime, rate, rating, cleanerName } =
    props.route.params;
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
          onPress={() => props.navigation.goBack()}
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
          View Report
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
          backgroundColor: "#FFF",
          height: high,
          bottom: high / 13,
          marginBottom: -60,
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            width: wid / 1.05,
            alignSelf: "center",
            top: 10,
            height: 50,
            backgroundColor: "transparent",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 21,
              color: "black",
            }}
          >
            {name}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text
              style={{
                color: "#0F3C22",
                fontFamily: "Poppins-Medium",
                fontSize: 17,
              }}
            >
              {rate}
            </Text>
            <Text
              style={{
                color: "#B8B8B8",
                fontFamily: "Poppins-Medium",
                fontSize: 15,
                top: 3,
              }}
            >
              Hour
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 2,
            borderRadius: 30,
            width: wid / 1.5,
            left: 25,
          }}
        >
          <FontAwesome
            name="star"
            style={{ marginRight: 5, alignSelf: "center" }}
            size={15}
            color="#FDDC22"
          />
          <FontAwesome
            name="star"
            style={{ alignSelf: "center", marginRight: 5 }}
            size={15}
            color="#FDDC22"
          />
          <FontAwesome
            name="star"
            style={{ alignSelf: "center", marginRight: 5 }}
            size={15}
            color="#FDDC22"
          />
          <FontAwesome
            name="star"
            style={{ alignSelf: "center", marginRight: 5 }}
            size={15}
            color="#FDDC22"
          />
          <FontAwesome
            name="star-half"
            style={{ alignSelf: "center", marginRight: 5 }}
            size={15}
            color="#FDDC22"
          />
          <Text
            style={{
              color: "#B8B8B8",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              left: 5,
            }}
          >
            {rating}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 11,
            width: wid / 1.18,
            flexDirection: "column",
            alignSelf: "center",
            top: high / 40,
            height: high / 4.88,
            borderWidth: 1,
            marginBottom: 20,
            borderColor: "#EDEDED",
            backgroundColor: "#FFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              top: 10,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={[styles.text, { fontSize: 17 }]}>
              Property Details
            </Text>
            <Image
              source={require("../assets/images/cleanerPro.png")}
              style={{
                left: 40,
                width: wid / 13,
                bottom: 3,
                height: wid / 13,
                borderRadius: 100,
              }}
            ></Image>
            <Text style={[styles.text, { fontSize: 13, top: 2 }]}>
              {cleanerName}
            </Text>
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
              paddingHorizontal: 20,
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#494949",
                fontFamily: "Poppins-Regular",
              }}
            >
              Property Type
            </Text>
            <Text
              style={{
                fontSize: 12,
                top: 2,
                color: "#A9A9A9",
                paddingRight: 10,
                fontFamily: "Poppins-Regular",
              }}
            >
              Full Invoice
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#494949",
                fontFamily: "Poppins-Regular",
              }}
            >
              Contract
            </Text>
            <Text
              style={{
                fontSize: 12,
                top: 2,
                color: "#A9A9A9",
                paddingRight: 10,
                fontFamily: "Poppins-Regular",
              }}
            >
              #0011
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#494949",
                fontFamily: "Poppins-Regular",
              }}
            >
              Date
            </Text>
            <Text
              style={{
                fontSize: 12,
                top: 2,
                color: "#A9A9A9",
                paddingRight: 10,
                fontFamily: "Poppins-Regular",
              }}
            >
              {date}, {startTime}-{endTime}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 11,
            width: wid / 1.18,
            flexDirection: "column",
            alignSelf: "center",
            top: high / 40,
            height: high / 4.88,
            borderWidth: 1,
            marginBottom: 20,
            borderColor: "#EDEDED",
            backgroundColor: "#FFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              top: 10,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={[styles.text, { fontSize: 17 }]}>Description</Text>
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 20,
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 13,
                color: "#888888",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 11,
            width: wid / 1.18,
            flexDirection: "column",
            alignSelf: "center",
            top: high / 40,
            height: high / 4.88,
            borderWidth: 1,
            marginBottom: 20,
            borderColor: "#EDEDED",
            backgroundColor: "#FFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              top: 10,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={[styles.text, { fontSize: 17 }]}>Defective Items</Text>
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
              paddingHorizontal: 20,
              backgroundColor: "#FFF",
            }}
          >
            {/* <FlatList data={images}
                renderItem={({item})=>(
                    <View></View>
                )}
                /> */}
          </View>
        </View>
        <View
          style={{
            borderRadius: 11,
            width: wid / 1.18,
            flexDirection: "column",
            alignSelf: "center",
            top: high / 40,
            height: high / 4.88,
            borderWidth: 1,
            marginBottom: 20,
            borderColor: "#EDEDED",
            backgroundColor: "#FFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              top: 10,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={[styles.text, { fontSize: 17 }]}>Status</Text>
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
              paddingHorizontal: 20,
              backgroundColor: "black",
            }}
          >
            {/* <FlatList data={images}
                renderItem={({item})=>(
                    <View></View>
                )}
                /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Poppins-Medium",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "100%",
  },
});
