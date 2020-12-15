console.warn = () => { }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import store from './store'
import Facilities from './screens/Facilities'
import RoomView from './screens/RoomView';
import BookingConfirmation from './screens/BookingConfirmation'
import SplashScreen from './screens/SplashScreen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Dashboard" component={SplashScreen}/>
          <Stack.Screen name='Facilities' component={Facilities} /> */}
          {/* <Stack.Screen name='RoomView' component={RoomView} /> */}
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


