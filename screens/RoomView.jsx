import React, { useState } from 'react'
import { Text } from 'react-native'
import {Entity, Scene} from 'aframe-react';
import { WebView } from 'react-native-webview';


export default function RoomView(){
  const [color, setColor] = useState('')

  function changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
      setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return(
    <>
      <WebView source={{uri: 'https://hotelimage.s3-ap-southeast-1.amazonaws.com/index.html'}} style={{flex:1}}/>
    </> 
  )
}