import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {  View } from '../components/Themed';

import { StyleSheet, Image, Dimensions, ScrollView, Text, TouchableOpacity, FlatList,  } from 'react-native';
const wid= Dimensions.get("screen").width;
const high = Dimensions.get("screen").height;
export default function BookJobScreen(props:any) {
    console.log(props.route.params);
    const { name, date, startTime, endTime, rate, rating, cleanerName } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={{ alignSelf:"flex-start",width : wid, height: high/4}}>
        <Image source={require("../assets/images/jobview.png")} />
      </View>
      <View style={{flexDirection:"row",height:high/15,bottom:high/4.6, justifyContent:"space-between", width: wid, backgroundColor:"transparent"}}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{alignSelf:"center",borderRadius: 10, justifyContent:"center", left: 20, width:35, height: 35, backgroundColor:"#FFF"}}>
        <Image style={{alignSelf:"center"}} source={require("../assets/images/back.png")} />
        </TouchableOpacity>
        <Text  style={{fontFamily: "Poppins-Bold", fontSize : 22, color: "#FFF", alignSelf:"center"}}>View Job</Text>
        <Image style={{alignSelf:"center", right:30}} source={require("../assets/images/dots.png")} />
      </View>
      <ScrollView style={{width: wid,flexDirection:"column", backgroundColor:"#FFFFFF", height: high, bottom:high/13, borderTopRightRadius: 30, borderTopLeftRadius: 30}}>
        <View style={{alignSelf:"center",height: 30, justifyContent:"center",alignItems:"center",}}>
            <Image style={{alignSelf:"center"}} source={require("../assets/images/slider.png")} />
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between", paddingHorizontal: 20,
         width: wid/1.05,alignSelf:"center", top: 10, height: 50, backgroundColor:"transparent"}}>
            <Text style={{fontFamily: "Poppins-Medium", fontSize : 21, color: "black"}}>{name}</Text>
            <View style={{flexDirection:"row", justifyContent: "space-around"}}>
                <Text style={{color: "#0F3C22", fontFamily: "Poppins-Medium", fontSize: 17}}>{rate}</Text>
                <Text style={{color: "#B8B8B8", fontFamily: "Poppins-Medium", fontSize: 15, top :3}}>Hour</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", paddingHorizontal: 2,borderRadius:30, width: wid/1.5,  left: 25}}>
            <FontAwesome name="star" style={{marginRight: 5}} size={15} color="#FDDC22"/>
            <FontAwesome name="star" style={{marginRight: 5}} size={15} color="#FDDC22"/>
            <FontAwesome name="star" style={{marginRight: 5}} size={15} color="#FDDC22"/>
            <FontAwesome name="star" style={{marginRight: 5}} size={15} color="#FDDC22"/>
            <FontAwesome name="star-half" style={{marginRight: 5}} size={15} color="#FDDC22"/>
            <Text style={{color: "#B8B8B8", fontFamily: "Poppins-Medium", fontSize: 15, left: 5, bottom: 3}}>{rating}</Text>
        </View>
        <View style={{borderRadius: 11,marginBottom: 20, width: wid/1.18,flexDirection:"column",alignSelf:"center",top: high/40, height: high/5.88, borderWidth:1, borderColor: "#EDEDED",
                    backgroundColor:"#FFF"}}>
            <View style={{flexDirection:"row",
            justifyContent:"space-between", paddingHorizontal: 20, top: 10, backgroundColor:"#FFF"}}>
                <Text style={[styles.text,{fontSize:17}]}>Property Details</Text>
                <Image source={require("../assets/images/cleanerPro.png")} style={{left: 40, width: wid/13,bottom: 3, height: wid/13, borderRadius: 100}}></Image>
                <Text style={[styles.text,{fontSize:13, top : 2}]}>{cleanerName}</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Property Type</Text>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9"}}>Full Service</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",top:10, paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Contract</Text>
                <View style={{flexDirection:"row",}}>
                <Image source={require("../assets/images/pdf.png")} style={{marginRight: 2}}/>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9"}}>#0110</Text>
            </View>
            </View>
        </View>
        <View style={{borderRadius: 11, width: wid/1.18,flexDirection:"column",alignSelf:"center",top: high/40, height: high/7.88, borderWidth:1,marginBottom: 20, borderColor: "#EDEDED",
                    backgroundColor:"#FFF"}}>
            <View style={{flexDirection:"row", paddingHorizontal: 20,justifyContent:"space-between", top: 10, backgroundColor:"#FFF"}}>
                <Text style={[styles.text,{fontSize:17}]}>Booking Date & Time</Text>
                <View style={{width: wid/5, height: high/30,justifyContent:"center",borderRadius:40, backgroundColor:"#F5F5F5"}}>
                <Text style={{fontSize:13, alignSelf:"center", fontFamily: "Poppins-Regular",color:"#6C6C6C"}}>00:00</Text>
                </View>
            </View>
            <View style={[styles.separator,{top: 5}]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={{flexDirection:"row",justifyContent:"space-between",top: 5, paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Booking At</Text>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9", fontFamily: "Poppins-Regular"}}>{date}, {startTime}-{endTime}</Text>
            </View>
        </View>
        <View style={{borderRadius: 11, width: wid/1.18,flexDirection:"column",alignSelf:"center",
        top: high/40, height: high/4.88, borderWidth:1,marginBottom: 20, borderColor: "#EDEDED",
                    backgroundColor:"#FFF"}}>
            <View style={{flexDirection:"row", paddingHorizontal: 20,justifyContent:"space-between", top: 10, backgroundColor:"#FFF"}}>
                <Text style={[styles.text,{fontSize:17}]}>Property Items</Text>
                <View style={{width: wid/5, height: high/30,justifyContent:"center",borderRadius:40, backgroundColor:"#F5F5F5"}}>
                <Text style={{fontSize:13, alignSelf:"center", fontFamily: "Poppins-Regular", color:"#6C6C6C"}}>20 Items</Text>
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Floor</Text>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9", paddingRight:10, fontFamily: "Poppins-Regular"}}>2nd</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20,paddingVertical:15, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Operate</Text>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9", paddingRight:10, fontFamily: "Poppins-Regular"}}>Room No-2</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                <Text style={{fontSize:15, color: "#494949", fontFamily: "Poppins-Regular"}}>Invoice</Text>
                <Text style={{fontSize:12, top : 2, color: "#A9A9A9", paddingRight:10, fontFamily: "Poppins-Regular"}}>PDF</Text>
            </View>
        </View>
        <View style={{borderRadius: 11, width: wid/1.18,flexDirection:"column",alignSelf:"center",
        top: high/40, height: high/4.88, borderWidth:1,marginBottom: 20, borderColor: "#EDEDED",
                    backgroundColor:"#FFF"}}>
            <View style={{flexDirection:"row", paddingHorizontal: 20,justifyContent:"space-between", top: 10, backgroundColor:"#FFF"}}>
                <Text style={[styles.text,{fontSize:17}]}>Image Items</Text>
                <View style={{width: wid/5, height: high/30,justifyContent:"center",borderRadius:40, backgroundColor:"#F5F5F5"}}>
                <Text style={{fontSize:13, alignSelf:"center", fontFamily: "Poppins-Regular", color:"#6C6C6C"}}>10 Items</Text>
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal: 20, backgroundColor:"#FFF"}}>
                {/* <FlatList data={images}
                renderItem={({item})=>(
                    <View></View>
                )}
                /> */}
            </View>
        </View>
      </ScrollView>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal: 21, width: wid, height: high/47,}}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} 
            style={{width: wid/2.5,justifyContent:"center",alignItems:"center",bottom:high/20, height: high/17, backgroundColor:"#E9E9E9", borderRadius: 110}}>
                <Text style={{fontSize:15, top : 2, color: "#989898", fontFamily: "Poppins-Medium"}}>Cancel Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: wid/2.5, height: high/17,justifyContent:"center",bottom:high/20,alignItems:"center", backgroundColor:"#FDDC22", borderRadius: 110}}>
                <Text style={{fontSize:15, top : 2, fontFamily: "Poppins-Medium"}}>Book Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontFamily: "Poppins-Medium",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '100%',
  },
});
