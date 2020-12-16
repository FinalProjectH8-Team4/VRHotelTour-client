import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const widthValue = Dimensions.get('window').width
const heightValue = Dimensions.get('window').height
const image = { uri: 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }

function Home({ navigation }) {
  
  function onPressEnter() {
    navigation.navigate("Facilities")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <LinearGradient colors={['transparent', '#4d3572']} style={styles.backgroundGradient} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontStyle: 'italic', fontSize: 30, color: 'white', marginTop: heightValue - 180 }}>Inep<Text style={{ fontWeight: 'bold' }}>Inn</Text></Text>
          <TouchableOpacity style={styles.button} onPress={onPressEnter}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: 'white',
    padding: 8,
    width: widthValue / 2,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: '#4d3572',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: widthValue
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: heightValue / 2
  }
})

export default Home