import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const widthValue = Dimensions.get('window').width

export default function ImageComponent(props){
    const {uri, desc} = props
    return (
        <View>
            <Image source={{uri}} style={styles.fullwidth}/>
            <Text>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fullwidth: {
        width: widthValue-10,
        height: widthValue-10
    }
  });