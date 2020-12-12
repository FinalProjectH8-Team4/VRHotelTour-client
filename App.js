import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store/index'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import HotelFacility from './src/screens/HotelFacility'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#ffffff' }}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Facility" component={HotelFacility}/>
        </Stack.Navigator >
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
