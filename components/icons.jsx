import React from 'react'
import { View, Image } from 'react-native'

function Icons () {
    return (
        <View style={{flexDirection: "column", marginTop: 50}}>
            <View style={{flexDirection: 'column', alignItems: 'center', borderRadius: 10, padding: 15, opacity: 0.8}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/icons/wifi.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/ac.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/breakfast.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/toiletries.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/parking.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/icons/lobby.jpg')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/pool.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/fitness.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/bar.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Image source={require('../assets/icons/spa.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                </View>
            </View>
        </View>
    )
}

export default Icons