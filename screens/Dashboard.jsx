import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../styles'


export default function Dashboard({navigation}) {
  function navigateTo(){
    navigation.navigate('RoomView')
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Hello, User</Text>
          <Text style={Styles.subtitle}>Please select one room that you like</Text>
        </View>
        <TouchableWithoutFeedback style={{height:240}} onPress={navigateTo}>
        <View style={Styles.roomCard}>
          <View style={Styles.cardDetail}>
            <Text>Superior Room</Text>
          </View>
          <View style={Styles.imageContainer}>
            <Image style={Styles.roomCardImage} source={require('../assets/superior-300x300.jpg')} />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}