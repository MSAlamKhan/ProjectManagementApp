import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "../screens/Splash/SplashScreen";
import Signin from "../screens/Authentication/Signin";
import ForgotPass from "../screens/Authentication/ForgotPass";
import OtpScreen from "../screens/Authentication/OtpScreen";
import ChangePass from "../screens/Authentication/ChangePass";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="signin"
      >
        <Stack.Screen name="mainsplash" component={SplashScreen} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="changepass" component={ChangePass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
