import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icons from '../components/icons'
import { useDispatch, useSelector } from 'react-redux'
import { bookByMail } from '../store/actions/actionHotels'
import { EventRegister } from 'react-native-event-listeners'
import { log } from 'three'

const widthValue = Dimensions.get('window').width

function BookingConfirmation({ navigation, route }) {
  const [email, setEmail] = useState('')
  const [roomType, setRoomType] = useState(route.params.roomType)
  const dispatch = useDispatch()
  const hotel = useSelector((state) => state.hotel)

  useEffect(() => {

    const boooking_success_event = EventRegister.addEventListener('booking_success', (data) => {
      Alert.alert("Booking Confirmation", data, [
        { text: "OK", onPress: () => navigation.navigate('Facilities') }
      ])
    })

    const booking_failed_event = EventRegister.addEventListener('booking_failed', (data) => {
      Alert.alert("Ooops..", "There is some problem on our side, sorry for the inconvenience", [
        { text: "OK", onPress: () => console.log('damn') }
      ])
    })
    
    return () => {
      EventRegister.removeEventListener(boooking_success_event)
      EventRegister.removeEventListener(booking_failed_event)
    }
  }, [])

  useEffect(() => {
    
  }, [hotel])

  function handleEmailInput(val) {
    setEmail(val)
  }

  function bookRoom() {
    if (!email) {
      Alert.alert("Ooops", "Please Enter your E-Mail Address", [
        { text: "OK", onPress: () => console.log('pressed') }
      ])
    } else {
      dispatch(bookByMail(email))
    }
  }

  function getRoomPrice(){
    let type = hotel.room_type.filter(item=> item.type.toLowerCase() === roomType)
    return type[0].price
  }

  return (
    <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="height">
      <View style={{ backgroundColor: 'white', flex: 1 }} keyboardVerticalOffset={100}>
        <LinearGradient colors={['#4d3572', 'transparent']} style={styles.gradient}>
          <Text style={styles.InepInn}>Inep<Text style={{ fontWeight: 'bold' }}>Inn</Text></Text>
          <Text style={{ fontWeight: 'bold', marginLeft: 20, fontSize: 20, color: 'white' }}>{hotel.name}</Text>
          <Text style={{ marginLeft: 20, color: 'white' }}>Room Type: <Text style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{roomType} Room</Text></Text>
          <Text style={{ marginLeft: 20, color: 'white' }}>Price: <Text style={{ fontWeight: 'bold' }}>Rp. {getRoomPrice()}</Text> </Text>
          <Icons />
        </LinearGradient>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "#4d3572", marginBottom: 8 }}>Enter your email to book this room</Text>
          <View style={{ width: widthValue - 80, marginBottom: 10 }}>
            <TextInput
              placeholder="Enter your email.."
              value={email}
              onChangeText={(email) => handleEmailInput(email)}
              style={styles.textBorder}
            />
          </View>
          <TouchableOpacity style={{ backgroundColor: '#4d3572', padding: 8, width: 120, borderRadius: 5 }} onPress={() => bookRoom()}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Book!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    height: 320,
    backgroundColor: 'white',
    marginTop: widthValue / 5,
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