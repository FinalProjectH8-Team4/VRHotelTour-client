import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {Entity, Scene} from 'aframe-react';
import { WebView } from 'react-native-webview';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function RoomView({navigation}){
 
  function navigateTo(){
    navigation.navigate('BookingConfirmation')
  }

  return(
    <>
      <WebView source={{uri: 'https://hotelimage.s3-ap-southeast-1.amazonaws.com/superior/room.html'}} style={{flex:1,position:'relative',zIndex:1}}/>      
      <View style={{position:'absolute',zIndex:40,bottom:20,alignItems:'center',width:'100%'}}>
        <TouchableWithoutFeedback style={{width:'100%'}} onPress={navigateTo}>
        <View style={{backgroundColor:'#fff',width:'40%',alignItems:'center',padding:10,borderRadius:10}}>
          <Text>Book this room</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
    </> 
  )
}
