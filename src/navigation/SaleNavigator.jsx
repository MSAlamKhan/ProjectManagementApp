import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//Icons Import
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";

import { Colors } from "../utils/Color";
import Home from "../screens/SalesSide/Home/Home";
import Profile from "../screens/SalesSide/Profile/Profile";
import Notification from "../screens/SalesSide/Notification/Notification";
import Setting from "../screens/SalesSide/Setting/Setting";
import { scale, verticalScale } from "react-native-size-matters";
import { Font } from "../utils/font";
import JobForm from "../components/common/Cards/JobForm";



const StudentNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          // tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: Colors.Black,
          tabBarInactiveTintColor: Colors.BottomIcon,
          tabBarStyle :{
            height:verticalScale(65),
            paddingTop:verticalScale(10),
            paddingBottom:verticalScale(2)
            
          }
          
          
        }}
      
      
      >
        <Tab.Screen
          name="Home"
          
          component={AllHome}
          options={{
         tabBarLabelStyle : {
            fontFamily:Font.AnekBangla400,
            fontSize:scale(12)
         },
            tabBarLabel: "Home",
            
            tabBarIcon: ({ color, size }) => (
              <Octicons name={"home"} color={color} size={scale(26)} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AllProfile}
          options={{
            tabBarLabelStyle : {
              fontFamily:Font.AnekBangla400,
              fontSize:scale(12)
           },
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Feather name={"user"} color={color}  size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={AllNotification}
          options={{
            tabBarLabelStyle : {
              fontFamily:Font.AnekBangla400,
              fontSize:scale(12)
           },
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <Ionicons  name={"notifications"}color={color}  size={size} />
            ),
          }}
        />

        

        <Tab.Screen
          name="Setting"
          component={AllSetting}
          options={{
            tabBarLabel: "Setting",
            tabBarLabelStyle : {
              fontFamily:Font.AnekBangla400,
              fontSize:scale(12)
           },
            tabBarIcon: ({ color, size }) => (
              <Feather name={"settings"} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StudentNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homemain"
    >
      <Stack.Screen name="homemain" component={Home} />
      <Stack.Screen name="jobform" component={JobForm} />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="profile"
    >
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

function AllNotification() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="notification"
    >
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
}

function AllSetting() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="setting"
    >
      <Stack.Screen name="setting" component={Setting} />
    </Stack.Navigator>
  );
}






