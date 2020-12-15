import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const widthValue = Dimensions.get('window').width

export default function ImageComponent(props){
    const {uri, name} = props
    return (
        <View>
            <Image source={{uri}} style={styles.fullwidth}/>
            <Text style={{textAlign: 'center', color: '#4d3572', fontSize: 16, fontWeight: "bold"}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fullwidth: {
        width: widthValue-15,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 10,
        borderRadius: 8,
    }
});