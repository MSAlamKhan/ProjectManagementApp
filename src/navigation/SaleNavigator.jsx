import React,{useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Icons Import
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";

import { Colors } from "../utils/Color";
import Home from "../screens/SalesSide/Home/Home";
import { scale, verticalScale } from "react-native-size-matters";
import { Font } from "../utils/font";
import AddLead from "../screens/SalesSide/Home/AddLead";
import ImageSelection from "../components/common/ImageSelection";
import JobMain from "../screens/SalesSide/Home/JobMain";
import AllTask from "../screens/SalesSide/Home/AllTask";
import Setting from "../screens/common/Setting";
import ProfileEdit from "../screens/common/ProfileEdit";
import Terms from "../screens/common/Terms";
import Notification from "../screens/common/Notification";
import CompletedJob from "../screens/SalesSide/Home/CompletedJob";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { get_notification_Count } from "../redux/actions/UserAction";
import OneSignal from "react-native-onesignal";

const SaleNavigator = () => {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  
  const notification = useSelector((state) => state.notification_length)
  OneSignal.setNotificationWillShowInForegroundHandler(
    notificationReceivedEvent => {
      let notification = notificationReceivedEvent.getNotification();
      OneSignal.add;
      const data = notification.additionalData;
      if (data?.type == "message") {
        dispatch(get_notification_Count());
      } else {
        dispatch(get_notification_Count());
      }
      console.log('data', data);
      notificationReceivedEvent.complete(notification);
    },
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
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
              <>
              {notification > 0 && (
                <View 
                  style={{
                    borderRadius: 100,
                    backgroundColor: "red",
                    width: 10,
                    aspectRatio: 1 / 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 7, color: "#fff" }}>
                    {notification}
                  </Text>
                </View>
              )}

              <Ionicons name={"notifications"} color={color} size={size} />
            </>
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
      <Stack.Screen name="term" component={Terms} />
    </Stack.Navigator>
  );
}
