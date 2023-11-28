import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../../components/common/Background";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, verticalScale } from "react-native-size-matters";
import TotalCard from "../../../components/common/Cards/TotalCard";
import CustomButton from "../../../components/common/Button/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import {
  getTradeDashboard,
  get_notification_Count,
} from "../../../redux/actions/UserAction";
import Graph from "../../../components/common/Graphs/Graph";
import { Colors } from "../../../utils/Color";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("total");
  const [color, setColor] = useState("#0077B6");
  const [refreshing, setRefreshing] = useState(false);
  const { height } = Dimensions.get("window");
  const data = useSelector((state) => state.get_trade_dashboard_data);
  useEffect(() => {
    dispatch(getTradeDashboard());
    dispatch(get_notification_Count());
  }, []);
  card_data = [
    {
      id: 1,
      total: "Total Job assigned",
      amount: data?.total_task_assign,
      color: "#0077B6",
      onPress: () =>
        navigation.navigate("showFullTradeJobs", { type: "total" }),
      onLongPress: () => {
        setType("total"), setColor("#0077B6");
      },
    },
    {
      id: 3,
      total: "Total completed submissions",
      amount: data?.total_task_completed,
      color: "#1E90FF",
      onPress: () =>
        navigation.navigate("showFullTradeJobs", { type: "completed" }),
      onLongPress: () => {
        setType("completed"), setColor("#1E90FF");
      },
    },
    {
      id: 4,
      total: "Total number of job delivered late",
      amount: data?.task_delivered_late,
      color: "#1E90FF",
      onPress: () => navigation.navigate("showFullTradeJobs", { type: "late" }),
      onLongPress: () => {
        setType("late"), setColor("#1E90FF");
      },
    },
    {
      id: 5,
      total: "Total number of job pending",
      amount: data?.task_pending,
      color: "#FFAD41",
      onPress: () =>
        navigation.navigate("showFullTradeJobs", { type: "pending" }),
      onLongPress: () => {
        setType("pending"), setColor("#FFAD41");
      },
    },
  ];
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getTradeDashboard());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <Background>
      <ScrollView
       showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={Colors.Main}
            colors={[Colors.Main, Colors.Blue]}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        <View style={GlobalStyle.ph20}>
          <View style={{ height: height * 0.05 }} />
          <View style={styles.TextView}>
            <Text style={GlobalStyle.BlueText}>Welcome To,</Text>
            <Text style={GlobalStyle.BlackText}>Trax Jobsite</Text>
          </View>

          <View style={styles.MapView}>
            {card_data.map((item, index) => {
              return (
                <TotalCard
                  key={index}
                  total={item.total}
                  color={item.color}
                  amount={item.amount}
                  onPress={item.onPress}
                  onLongPress={item.onLongPress}
                />
              );
            })}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(10),
            marginTop: verticalScale(10),
          }}
        >
          <Graph type={type} color={color}/>

          <CustomButton
            onPress={() => navigation.navigate("calendar")}
            containerRestyle={{ marginVertical: verticalScale(20) }}
            title={"View Calendar"}
          />
        </View>
      </ScrollView>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  TextView: {
    marginVertical: verticalScale(10),
  },
  MapView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
