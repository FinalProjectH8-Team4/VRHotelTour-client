console.warn = () => { }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './store'
import Booking from './screens/Booking'
import RoomView from './screens/RoomView';
import BookingConfirmation from './screens/BookingConfirmation'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Booking'>
          {/* <Stack.Screen name='Booking' component={Booking} /> */}
          {/* <Stack.Screen name='RoomView' component={RoomView} /> */}
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


