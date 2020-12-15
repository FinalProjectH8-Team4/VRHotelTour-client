import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function BookingConfirmation () {
    return (
        <View style={{backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/InepInn-transparant.png')} style={{width: 150, height: 50, marginTop: 20}}/>
            </View>
            <View style={{flexDirection: "column", marginTop: 10}}>
                <View style={{marginLeft: 40, marginRight: 40, border: 5, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Fairmont Jakarta</Text>
                    <Text>Room Type: <Text style={{fontWeight: 'bold'}}>Duluxe Room</Text></Text>
                    <Text>Price: <Text style={{fontWeight: 'bold'}}>Rp. 630000</Text> </Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20, backgroundColor: '#ee8b74', borderRadius: 10, padding: 15, margin: 50, opacity: 0.8}}>
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
            <View style={{alignItems: 'center'}}>
                <Text style={{color: "#4d3572"}}>Enter your email to book this room</Text>
                <View style={{width: 250, marginBottom: 8}}>
                    <TextInput 
                        placeholder="Enter your email.."
                        style={styles.textBorder}
                    />
                </View>
                <TouchableOpacity style={{backgroundColor: '#4d3572', padding: 8, width: 70, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Book!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textBorder: {
        alignItems: 'center', 
        textAlign: 'center', 
        borderWidth: 1, 
        borderColor: '#ee8b74', 
        borderRadius: 8,
        height: 40
    }
})

export default BookingConfirmation 