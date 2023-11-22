import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React,{useEffect} from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, verticalScale } from "react-native-size-matters";
import TotalCard from "../../../components/common/Cards/TotalCard";
import Graph from "../../../components/common/Graph";
import CustomButton from "../../../components/common/Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getSalesDashboard, get_notification_Count } from "../../../redux/actions/UserAction";

const Home = ({ navigation }) => {
  
  const dispatch = useDispatch()
  const get_dashboard_data = useSelector((state) => state.get_dashboard_data);
  useEffect(() => {
    dispatch(getSalesDashboard());
    dispatch(get_notification_Count());
  }, [])
  card_data = [
    {
      id: 1,
      total: "Total Number of Project",
      amount: get_dashboard_data?.pending,
      color: "#1E90FF",
    },
    {
      id: 2,
      total: "Total Projects underprogress",
      amount: get_dashboard_data?.inprogress,
      color: "#FFAD41",
    },
    {
      id: 3,
      total: "Total completed Projects",
      amount: get_dashboard_data?.completed,
      color: "#0077B6",
    },
  ];
  const {height} = Dimensions.get("window");

  return (
    <Background>
      <ScrollView>
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
          <Graph />

          <CustomButton
            onPress={() => navigation.navigate("jobmain")}
            containerRestyle={{ marginVertical: verticalScale(20) }}
            title={"View All Jobs"}
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
