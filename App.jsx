import React, { useEffect, useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import TradeNavigator from "./src/navigation/TradeNavigator";
import SaleNavigator from "./src/navigation/SaleNavigator";
import { useDispatch, useSelector } from "react-redux";
import Splash from "./src/screens/Splash/SplashScreen";
import { USER_DETAILS } from "./src/redux/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getSalesLead,
  getTradeDashboard,
  get_notification_Count,
} from "./src/redux/actions/UserAction";
import OneSignal from "react-native-onesignal";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userDetails = useSelector((state) => state.userDetails);

  useEffect(() => {
    OneSignal.setAppId("41ec2948-bcfd-4204-ae97-052901f03973");
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log("Prompt response:", response);
    });

    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        let notification = notificationReceivedEvent.getNotification();
        console.log("notification: ", notification);
        OneSignal.add;
        const data = notification.additionalData;
        if (data?.type == "message") {
          dispatch(get_notification_Count());
        } else {
          dispatch(get_notification_Count());
        }
        notificationReceivedEvent.complete(notification);
      }
    );
    OneSignal.addSubscriptionObserver(async (event) => {
      if (event.to.isSubscribed) {
        const state = await OneSignal.getDeviceState();
        await AsyncStorage.setItem("onesignaltoken", state.userId);
        console.log("token", state.userId);
      }
    });
  }, []);

  useEffect(() => {
    getUserData();
    dispatch(getSalesLead());
    dispatch(getTradeDashboard());
  }, []);

  const getUserData = async () => {
    const data = await AsyncStorage.getItem("user_details");
    const cnvrtData = JSON.parse(data);

    if (cnvrtData) {
      dispatch({ type: USER_DETAILS, payload: cnvrtData });
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          {userDetails == null ? (
            <AuthNavigator />
          ) : userDetails?.role_id == 1 ? (
            <TradeNavigator />
          ) : (
            <SaleNavigator />
          )}
        </>
      )}
    </>
  );
};

export default App;
