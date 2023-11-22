import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils/Base_urls";
import React, {useCallback, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import BackIcon from "../../components/common/BackIcon";
import Empty from "../../components/common/Cards/Empty";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { useFocusEffect } from "@react-navigation/native";
import { NOTIFICATION_LENGTH } from "../../redux/reducer";
import Background from "../../components/common/Background";
import Loader from "../../components/common/Modals/LoaderModal";
import { getNotificationData } from "../../redux/actions/UserAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NotificationCard from "../../components/common/NotificationCard";

const Notification = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useFocusEffect(
    useCallback(() => {
      dispatch(getNotificationData(setData,setLoad));
      dispatch(read_notification());
    }, [])
  );
  const read_notification = () => {
    return async dispatch => {
      try {
        const userDetail = await AsyncStorage.getItem('user_details')
        const Data = JSON.parse(userDetail)
        
        let url = `${BASE_URL}read-notification/${Data.id}`
  
        const response = await fetch(url, {
          method: 'POST',
        });
  
        const responseData = await response.json();
        if (responseData?.success?.status == 200) {
          console.log(responseData)
          dispatch({ type: NOTIFICATION_LENGTH, payload: responseData?.success?.count })
        } else {
          console.log('read_notification ==> else error', responseData?.message);
        }
      } catch (e) {
        console.log('read_notification catch error', e);
      }
    }
  }

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => <Empty marginTop={"30%"} />}
          renderItem={({ item }) => <NotificationCard data={item} />}
        />
      </Background>
      <Loader isVisible={load} />
    </SafeAreaView>
  );
};

export default Notification;
  