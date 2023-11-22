import React,{useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Icons Import
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";

import { Colors } from "../utils/Color";
import { scale, verticalScale } from "react-native-size-matters";
import { Font } from "../utils/font";

import Setting from "../screens/common/Setting";
import ProfileEdit from "../screens/common/ProfileEdit";
import Terms from "../screens/common/Terms";

import Home from "../screens/TradeSide/Home/Home";
import Calendar from "../screens/TradeSide/Home/Calendar";
import TaskScreen from "../screens/TradeSide/Home/TaskScreen";
import Notification from "../screens/common/Notification";
import ViewJob from "../screens/TradeSide/Jobs/ViewJob";
import LateJob from "../screens/TradeSide/Jobs/LateJob";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { get_notification_Count } from "../redux/actions/UserAction";
import OneSignal from "react-native-onesignal";

const TradeNavigator = () => {
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
            height: verticalScale(65),
            paddingTop: verticalScale(10),
            paddingBottom: verticalScale(2),
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

export default TradeNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homemain"
    >
      <Stack.Screen name="homemain" component={Home} />
      <Stack.Screen name="calendar" component={Calendar} />
      <Stack.Screen name="taskscreen" component={TaskScreen} />
      <Stack.Screen name="viewjob" component={ViewJob} />
      <Stack.Screen name="latejob" component={LateJob} />
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
