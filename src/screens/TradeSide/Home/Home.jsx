import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, verticalScale } from "react-native-size-matters";
import TotalCard from "../../../components/common/Cards/TotalCard";
import { Colors } from "../../../utils/Color";
import Graph from "../../../components/common/Graph";
import CustomButton from "../../../components/common/Button/CustomButton";

const Home = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  card_data = [
    { id: 1, total: "Total Job assigned", amount: "9", color: "#0077B6" },
    {
      id: 2,
      total: "Total number of pending jobs",
      amount: "7",
      color: "#FFAD41",
    },
    { id: 3, total: "Total completed submissions", amount: "7", color: "#1E90FF" },
    { id: 4, total: "Total number of job delivered late", amount: "7", color: "#1E90FF" },
  ];
  return (
    <Background>
     
      <ScrollView>
        <View style={GlobalStyle.ph20}>
        <View style={{ height: windowHeight * 0.05 }} />
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
        <View style={{ paddingHorizontal: moderateScale(10) }}>
          <Graph />

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
