import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter,
} from "react-native";
import { Dimensions, ImageBackground, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderNav from "../components/HeaderNav";
import JobCard from "../components/JobCard";
import { jobs } from "../data/JobData";
const wid = Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;

// import RazorpayCheckout from 'react-native-razorpay';

export default function ContractScreen({ navigation }: any) {
  return (
    <View>
      {/* <TouchableHighlight  style={{width: "90%", height: "10%", backgroundColor: "pink"}}  onPress={() => {
        var options :any = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_1DP5mmOlF5G5ag',
          amount: '5000',
          external: {
            wallets: ['paytm']
          },
          name: 'foo',
          prefill: {
            email: 'akshay@razorpay.com',
            contact: '8955806560',
            name: 'Akshay Bhalotia'
          },
          theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options).then((data:any) => {
          // handle success
          alert(`Success: ${data.razorpay_payment}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
        RazorpayCheckout.onExternalWalletSelection((data:any) => {
          alert(`External Wallet Selected: ${data.external_wallet} `);
        });
      }}>
      <Text style = {styles.text}>PAY</Text>
      </TouchableHighlight> */}
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
        <HeaderNav
          navigation={navigation}
          name="Reports"
          header={"Contracts"}
        />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

// AppRegistry.registerComponent('example', () => ContractScreen);
