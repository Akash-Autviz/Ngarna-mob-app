import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AnimationScreen = () => {
  const value :any = useState(new Animated.ValueXY({x:0,y:0}))[0];
  console.log(value)
  function moveBall (){
    Animated.timing(value,{
      toValue:{x:100,y:100},
duration:100,
useNativeDriver:false          ,

    }).start()
  }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Animated.View  
      style={value.getLayout()}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: "red",
          }}
        ></View>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Move The Ball</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AnimationScreen

const styles = StyleSheet.create({})