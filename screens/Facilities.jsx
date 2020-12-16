import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, ScrollView, Dimensions, ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import { fetchHotelById } from '../store/actions/actionHotels'
import ImageComponent from '../components/imageComponent'
import { Carousel } from 'nachos-ui'
import { LinearGradient } from 'expo-linear-gradient'

const widthValue = Dimensions.get('window').width

export default function Booking({ navigation }) {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const hotel = useSelector((state) => state.hotel)

  useEffect(() => {
    dispatch(fetchHotelById('5fda34909538adab4b7c82ef'))
  }, [])

  useEffect(() => {
    if (hotel.facilities) {
      const pushImages = hotel.facilities.map(facility => {
        return {
          uri: facility.images[0],
          name: facility.name,
          desc: facility.description
        }
      })
      setImages(pushImages)
    }
  }, [hotel])

  function navto(roomType) {
    navigation.navigate('RoomView', { roomType })
  }

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LinearGradient colors={['#4d3572', 'transparent']}>
        <Text style={{ fontStyle: 'italic', fontSize: 30, color: '#4d3572', textAlign: 'left', marginBottom: 10, marginTop: 40, marginLeft: 10 }}>Inep<Text style={{ fontWeight: 'bold' }}>Inn</Text></Text>
      </LinearGradient>
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "bold", marginLeft: 10, marginBottom: 10, marginTop: 40, color: '#4d3572' }}>Our Facilitites</Text>
          <ScrollView>
            <Carousel>
              {images.map((image, index) => (
                <ImageComponent key={index} uri={image.uri} name={image.name} desc={image.desc} />
              ))}
            </Carousel>
          </ScrollView>
          <Text style={{ color: '#4d3572', fontSize: 20, textAlign: 'left', marginLeft: 10 }}>Explore Our Rooms In <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>VR</Text></Text>
          <View style={{ flexDirection: 'row', marginBottom: 40 }}>
            <View style={{ flexDirection: 'column' }}>
              <TouchableWithoutFeedback onPress={() => navto('superior')}>
                <View>
                  <ImageBackground source={require('../assets/rooms/superior.jpg')} style={styles.rooms} imageStyle={{ borderRadius: 6 }}>
                  </ImageBackground>
                  <Text style={styles.roomText}>Superior Room</Text>
                  <View style={styles.overlay} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navto('deluxe')}>
                <View>
                  <ImageBackground source={require('../assets/rooms/duluxe.jpg')} style={styles.rooms} imageStyle={{ borderRadius: 6 }}>
                  </ImageBackground>
                  <Text style={styles.roomText}>Deluxe Room</Text>
                  <View style={styles.overlay} />

                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <TouchableWithoutFeedback onPress={() => navto('premier')}>
                <View>
                  <ImageBackground source={require('../assets/rooms/premier.jpg')} style={styles.rooms} imageStyle={{ borderRadius: 6 }}>
                  </ImageBackground>
                  <Text style={styles.roomText}>Premier Room</Text>
                  <View style={styles.overlay} />

                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navto('family')}>
                <View>
                  <ImageBackground source={require('../assets/rooms/family.jpg')} style={styles.rooms} imageStyle={{ borderRadius: 6 }}>
                  </ImageBackground>
                  <Text style={styles.roomText}>Family Room</Text>
                  <View style={styles.overlay} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rooms: {
    width: widthValue / 2 - 20,
    height: 100,
    borderRadius: 10,
    margin: 10,
    zIndex: 1
  },
  roomText: {
    ...StyleSheet.absoluteFillObject,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: "23%",
    fontSize: 16,
    zIndex: 5
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 10,
    borderRadius: 10,
    zIndex: 2

  }
});