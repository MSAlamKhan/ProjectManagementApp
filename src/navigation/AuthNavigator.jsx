import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';



import SplashScreen from '../screens/Splash/SplashScreen';
import Signin from '../screens/Authentication/Signin';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="signin">
          
        <Stack.Screen name="mainsplash" component={SplashScreen} />
        <Stack.Screen name="signin" component={Signin} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
