console.warn = () => { }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './store'
import Booking from './screens/Booking'
import RoomView from './screens/RoomView';
import Dashboard from './screens/Dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName='Dashboard'>
          
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='Booking' component={Booking} />
          <Stack.Screen name='RoomView' component={RoomView} />


        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


