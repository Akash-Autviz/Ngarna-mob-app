import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { hp, wp } from "../../utils/metrics";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Checkbox, List } from "react-native-paper";
import Accodion from "../../components/Accodion";
import axios from "axios";
import { baseUrl } from "../../utils";

const InspectionScreen = () => {
  const insets = useSafeAreaInsets();
  const cameraRef = useRef<any>(null);
  const [type, setType] = useState<CameraType>(CameraType.front);
  const[image,setImage]=useState<any>('')
const [popertyCleaningDetails, setPopertyCleaningDetails]=useState<any>([]);
  const [cameraFlash, setCameraFlash] = useState<FlashMode>(FlashMode.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [InspectionData, setInspectionData] = useState([]);
  const [currIndex, setIndex] = useState(0);
  const [inpectionHeader, setInpectionHeader] = useState("");
   
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const toggleFlashMode = () => {
    setCameraFlash((current) =>
      current === FlashMode.on ? FlashMode.off : FlashMode.on
    );
  };
  const takePicture = async () => {
    if (cameraRef.current) {
      let photo :any = await cameraRef.current.takePictureAsync();
    //   setImage(URL.createObjectURL(photo));
      setImage(photo.uri);
      console.log(photo);
    }
  };
  const getInspectionDetails = async()=>{
   try {
    const result = await axios.get(
      `${baseUrl}api/services/app/InspectionFormService/getGetInspectionItems?inspectionId=12`
    );
    let header ="";
    result?.data?.result?.forEach((item :any,idx :number)=>{
    console.log(item.propertyItem.operate);
    header += item.propertyItem.operate 
    if(idx  != result?.data?.result.length-1){
      header += " ,"
    }
    })
    setInpectionHeader(header);
    setInspectionData(result.data.result);
    console.log(result.data.result)
   } catch (error) {
    console.log(error)
   }
  }
  useEffect(()=>{
getInspectionDetails()
  },[])
  return (
    <View
      style={{
        flex: 1,
        width: wp(100),
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#124520",
        // paddingTop: insets.top,
        // // paddingBottom: insets.bottom,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
      }}
    >
      {/* <SafeAreaView
        style={{
          flex: 1,
        }}
      > */}
      <View style={[styles.topHeader, { paddingTop: hp(4), height: hp(12) }]}>
        <View style={[styles.iconContainer, { borderRadius: 10 }]}>
          <View>
            <Feather name="chevron-left" size={20} color="black" />
          </View>
        </View>
        <View>
          <Text style={[styles.textStyle, { fontSize: hp("2.8%") }]}>
            Introudction
          </Text>
        </View>
        <View>
          <Ionicons name="ios-flash-outline" size={25} color="#fff" />
        </View>
      </View>
      {/* --------------------------------------------------------------------------------------------------------------------- */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={styles.scrollContainer}
      >
        <View>
          <View style={{ marginTop: hp(2.5) }}>
            <Text style={[styles.textStyle, { fontSize: hp("1.9%") }]}>
              Hi and welcome to inspection
            </Text>
            <Text
            numberOfLines={2}
              style={[
                styles.textStyle,
                { fontSize: hp("2%"), marginTop: hp(0.2) },
              ]}
            >
              Today are you going to inpect  
            </Text>
            <Text style={[styles.textStyle, { fontSize: hp("1.9%") }]}>
              Hi and welcome to inspection
            </Text>
            <Text
            numberOfLines={2}
              style={[
                styles.textStyle,
                { fontSize: hp("2%"), marginTop: hp(0.2) },
              ]}
            >
               {inpectionHeader}
            </Text>
          </View>
          <View>
            {image ? (
              <Image style={styles.camera} source={{ uri: image }} />
            ) : (
              <></>
              //   <Camera
              //     flashMode={cameraFlash}
              //     ref={cameraRef}
              //     style={styles.camera}
              //   ></Camera>
            )}

            {/* <View
              style={{
                borderWidth: 3,
                borderColor: "grey",
                width: wp(85),
                marginTop: hp(6),
                backgroundColor: "pink",
                height: hp(50),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
              }}
            >
              <Ionicons name="ios-play-circle" size={84} color="yellow" />
            </View> */}
          </View>
          {/* <View
            style={{
              marginTop: hp(4),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome name="photo" size={44} color="#fff" />
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                paddingHorizontal: 5.5,
              }}
              //   onPress={requestPermission}
              onPress={takePicture}
            >
              <FontAwesome style={{}} name="circle" size={65} color="yellow" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType}>
              <Ionicons name="camera-reverse-outline" size={44} color="#fff" />
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
      {/* --------------------------------------------------------------------------------------------------------------------- */}
      <View style={styles.topHeader}>
        <View>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.textStyle, { fontSize: hp("2%") }]}>Skip</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default InspectionScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    width: wp(100),
    flex: 1,
    // backgroundColor: "pink",
  },
  topHeader: {
    alignItems: "center",
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(100),
    backgroundColor: "#0F3820",
    height: hp(10),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    // width:wp(11),height:hp(5),
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  textStyle: {
   
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    // borderWidth: 3,
    // borderColor: "grey",
    // width: wp(85),
    // marginTop: hp(6),
    // height: hp(50),
    // alignItems: "center",
    // justifyContent: "center",
    // borderRadius: 4,
    width: wp(85),
    marginTop: hp(6),
    height: hp(50),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
