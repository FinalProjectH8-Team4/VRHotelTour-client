import React, { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icons from '../components/icons'

const widthValue = Dimensions.get('window').width

function BookingConfirmation () {
    const [email, setEmail] = useState('')

    function handleEmailInput (email) {
        setEmail(email)
    }

    return (
        <View style={{backgroundColor: 'white',flex: 1}}>
            <LinearGradient colors={['#4d3572', 'transparent']}style={styles.gradient}>
                <Text style={styles.InepInn}>Inep<Text style={{fontWeight: 'bold'}}>Inn</Text></Text>
                <Text style={{fontWeight: 'bold', marginLeft: 20, fontSize: 20, color: 'white'}}>Fairmont Jakarta</Text>
                <Text style={{marginLeft: 20, color: 'white'}}>Room Type: <Text style={{fontWeight: 'bold'}}>Duluxe Room</Text></Text>
                <Text style={{marginLeft: 20, color: 'white'}}>Price: <Text style={{fontWeight: 'bold'}}>Rp. 630000</Text> </Text>
                <Icons/>
            </LinearGradient>
    
            <View style={{alignItems: 'center'}}>
                <Text style={{color: "#4d3572", marginBottom: 8}}>Enter your email to book this room</Text>
                <View style={{width: widthValue-80, marginBottom: 10}}>
                    <TextInput 
                        placeholder="Enter your email.."
                        value={email}
                        onChange={(email) => handleEmailInput(email)}
                        style={styles.textBorder}
                    />
                </View>
                <TouchableOpacity style={{backgroundColor: '#4d3572', padding: 8, width: 120, borderRadius: 5}}>
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
        borderColor: '#4d3572', 
        borderRadius: 8,
        height: 40
    },
    gradient: {
        height: '50%', 
        backgroundColor: 'white', 
        marginTop: widthValue/5, 
        marginLeft: 30, 
        marginRight: 30, 
        borderRadius: 10
    },
    InepInn: {
        fontStyle: 'italic', 
        fontSize: 40, 
        color: 'white', 
        textAlign: 'left', 
        marginBottom: 10, 
        marginLeft: 20, 
        marginTop: 10
    }
})

export default BookingConfirmation 