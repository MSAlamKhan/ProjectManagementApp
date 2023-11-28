import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Pressable,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../../components/common/Background";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import TotalCard from "../../../components/common/Cards/TotalCard";
import CustomButton from "../../../components/common/Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getSalesDashboard,
  get_notification_Count,
} from "../../../redux/actions/UserAction";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";
import Modal from "react-native-modal";
import SaleGraph from "../../../components/common/Graphs/SaleGraph";
import { iOS } from "../../../constant/Responsive";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [type, setType] = useState("total");
  const [color, setColor] = useState("#1E90FF");
  const [showModal, setShowModal] = useState(false);
  const [select, setSelect] = useState(30);
  const get_dashboard_data = useSelector((state) => state.get_dashboard_data);
  useEffect(() => {
    dispatch(getSalesDashboard(select));
    dispatch(get_notification_Count());
  }, [get_dashboard_data]);
  card_data = [
    {
      id: 1,
      total: "Total Number of Project",
      amount: get_dashboard_data?.pending,
      color: "#1E90FF",
      onPress: () => navigation.navigate("showFullSaleJobs", { type: "total" }),
      onLongPress: () => {
        setType("total"), setColor("#1E90FF");
      },
    },
    {
      id: 2,
      total: "Total Projects underprogress",
      amount: get_dashboard_data?.inprogress,
      color: "#FFAD41",
      onPress: () =>
        navigation.navigate("showFullSaleJobs", { type: "inprogress" }),
      onLongPress: () => {
        setType("completed"), setColor("#FFAD41");
      },
    },
    {
      id: 3,
      total: "Total completed Projects",
      amount: get_dashboard_data?.completed,
      color: "#0077B6",
      onPress: () =>
        navigation.navigate("showFullSaleJobs", { type: "completed" }),
      onLongPress: () => {
        setType("completed"), setColor("#0077B6");
      },
    },
  ];
  daysData = [
    { id: 1, title: 30 },
    { id: 2, title: 60 },
    { id: 3, title: 90 },
  ];
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getSalesDashboard(select));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const onSelect = (data) => {
    setSelect(data.title);
    setShowModal(false);
  };
  const { height } = Dimensions.get("window");

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
          <Pressable
            onPress={() => setShowModal(!showModal)}
            style={[GlobalStyle.Row, { alignSelf: "flex-end" }]}
          >
            <Text style={styles.Text}>{select} days</Text>
            <AntDesign name="circledown" size={18} color={Colors.Black} />
          </Pressable>
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
          <SaleGraph type={type} color={color} select={select} />

          <CustomButton
            onPress={() => navigation.navigate("jobmain")}
            containerRestyle={{ marginVertical: verticalScale(20) }}
            title={"View All Jobs"}
          />
        </View>
      </ScrollView>
      <Modal
        backdropOpacity={0.3}
        onBackdropPress={() => setShowModal(false)}
        isVisible={showModal}
        style={styles.ModalView}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
      >
        <View
          style={{ width: iOS ?  170 :  140, backgroundColor: "#fff", paddingVertical: 20,borderRadius:7 }}
        >
          <FlatList
            data={daysData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                android_ripple={{ color: Colors.Main }}
                onPress={() => onSelect(item)}
                style={[styles.DataBox, GlobalStyle.Row]}
              >
                <Text
                  style={[
                    styles.title,
                    {
                      color: select == item.title ? Colors.Blue : Colors.Black,
                    },
                  ]}
                >
                  Data of {item.title} days
                </Text>
                <AntDesign
                  name="check"
                  size={15}
                  color={select == item.title ? Colors.Blue : Colors.Non}
                />
              </Pressable>
            )}
          />
        </View>
      </Modal>
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
  Text: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: Font.AnekBangla500,
    marginHorizontal: 10,
  },
  ModalView: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: "10%",
  },
  title: {
    color: Colors.Black,
    fontSize: scale(15),
    fontFamily: Font.AnekBangla500,
    marginHorizontal: 7,
  },
  DataBox: {
    paddingHorizontal: 5,
    overflow: "hidden",
  },
});
