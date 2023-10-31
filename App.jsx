import React, { useEffect, useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import TradeNavigator from "./src/navigation/TradeNavigator";
import SaleNavigator from "./src/navigation/SaleNavigator";
import { useDispatch, useSelector } from "react-redux";
import Splash from "./src/screens/Splash/SplashScreen";
import { USER_DETAILS } from "./src/redux/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import OneSignal from "react-native-onesignal";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.isSignin);
  const userDetails = useSelector((state) => state.userDetails);

  // useEffect(() => {
  //   OneSignal.setAppId("6f7696a9-805e-4821-91bc-6dcfd4a62367");

  //   // OneSignal.promptForPushNotificationsWithUserResponse()
  //   OneSignal.setNotificationWillShowInForegroundHandler(
  //     (notificationReceivedEvent) => {
  //       let notification = notificationReceivedEvent.getNotification();
  //       OneSignal.add;
  //       const data = notification.additionalData;
  //       console.log("data =========>", data);
  //       notificationReceivedEvent.complete(notification);
  //     }
  //   );
  //   // OneSignal.setNotificationOpenedHandler((notification) => {})
  //   OneSignal.addSubscriptionObserver(async (event) => {
  //     if (event.to.isSubscribed) {
  //       const state = await OneSignal.getDeviceState();
  //       console.log("noti TOKEN ==>", state);
  //       await AsyncStorage.setItem("onesignaltoken", state.userId);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    getUserData();
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
          {userDetails == null && <AuthNavigator />}
          {userDetails?.role_id == 1 && <TradeNavigator />}
          {userDetails?.role_id == 2 && <SaleNavigator />}
        </>
      )}
    </>
  );
};

export default App;
