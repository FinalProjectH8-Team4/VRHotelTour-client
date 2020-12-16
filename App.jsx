console.warn = () => { }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import store from './store'
import Facilities from './screens/Facilities'
import RoomView from './screens/RoomView';
import Dashboard from './screens/Dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BookingConfirmation from './screens/BookingConfirmation'
import SplashScreen from './screens/SplashScreen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='SplashScreen'>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Facilities' component={Facilities} options={{ headerShown: false }} />
            <Stack.Screen name='RoomView' component={RoomView} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} options={{ title: '', headerTransparent: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


