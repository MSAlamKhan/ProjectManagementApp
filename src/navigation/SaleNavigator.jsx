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
import { scale, verticalScale } from "react-native-size-matters";
import { Font } from "../utils/font";
import JobForm from "../components/common/Cards/JobForm";
import AddLead from "../screens/SalesSide/Home/AddLead";
import ImageSelection from "../components/common/ImageSelection";
import JobMain from "../screens/SalesSide/Home/JobMain";
import AllTask from "../screens/SalesSide/Home/AllTask";
import Setting from "../screens/common/Setting";
import ProfileEdit from "../screens/common/ProfileEdit";
import Notification from "../screens/common/Notification";
import CompletedJob from "../screens/SalesSide/Home/CompletedJob";

const SaleNavigator = () => {
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
          tabBarStyle: {
            height: verticalScale(60),
            paddingTop: verticalScale(10),
            paddingBottom: verticalScale(2),
            backgroundColor: "#E3EFFC",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={AllHome}
          options={{
            tabBarLabelStyle: {
              fontFamily: Font.AnekBangla400,
              fontSize: scale(12),
            },
            tabBarLabel: "Home",

            tabBarIcon: ({ color }) => (
              <Octicons name={"home"} color={color} size={scale(26)} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={AllNotification}
          options={{
            tabBarLabelStyle: {
              fontFamily: Font.AnekBangla400,
              fontSize: scale(12),
            },
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"notifications"} color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Setting"
          component={AllSetting}
          options={{
            tabBarLabel: "Setting",
            tabBarLabelStyle: {
              fontFamily: Font.AnekBangla400,
              fontSize: scale(12),
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

export default SaleNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homemain"
    >
      <Stack.Screen name="homemain" component={Home} />
      <Stack.Screen name="addlead" component={AddLead} />
      <Stack.Screen name="imageselection" component={ImageSelection} />
      <Stack.Screen name="jobmain" component={JobMain} />
      <Stack.Screen name="alltask" component={AllTask} />
      <Stack.Screen name="completejob" component={CompletedJob} />
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
      <Stack.Screen name="profileedit" component={ProfileEdit} />
    </Stack.Navigator>
  );
}
