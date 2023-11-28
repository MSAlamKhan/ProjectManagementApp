import moment from "moment";
import React, { useState, useEffect } from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CalenderSort } from "../../../redux/actions/UserAction";

import OnGoingCard from "../../../components/common/Cards/OnGoingCard";
import CalenderCard from "../../../components/common/Cards/CalenderCard";
import Empty from "../../../components/common/Cards/Empty";
import Loader from "../../../components/common/Modals/LoaderModal";

const Calendar = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentDate = moment();

  const task_details = useSelector((state) => state.task_details);

  const [dateSelect, setDateSelect] = useState(currentDate.format("D"));
  const [load, setLoad] = useState(false);
  const formattedDates = [];

  for (let i = -7; i <= 6; i++) {
    const formattedDate = {
      date: currentDate.clone().add(i, "days").format("D"),
      day: currentDate.clone().add(i, "days").format("ddd"),
    };
    formattedDates.push(formattedDate);
  }

  const handleDate = (item) => {
    setDateSelect(item.date);
  };
  
  
  useEffect(() => {
    const selectedDate = moment(currentDate).set("date", dateSelect).format("YYYY-MM-DD");
    dispatch(CalenderSort(selectedDate, setLoad));
    console.log("Date Selected", selectedDate);
    if (scrollViewRef && formattedDates.length) {
      const index = formattedDates.findIndex(
        (item) => item.date === dateSelect
      );
      const scrollX = index * moderateScale(60);
      scrollViewRef.scrollTo({ x: scrollX, y: 0, animated: true });
    }
  }, [dateSelect]);

  let scrollViewRef;
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />

        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView
            ref={(ref) => {
              scrollViewRef = ref;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.dateBoxContainer}>
              {formattedDates.map((item, index) => (
                <CalenderCard
                  key={index}
                  data={item}
                  focus={dateSelect == item.date}
                  onPress={() => handleDate(item)}
                />
              ))}
            </View>
          </ScrollView>

          <View style={styles.TaskMain}>
            <Text style={GlobalStyle.BlackText}>Ongoing</Text>

            {task_details.length ? (
              task_details.map((details, index) => {
                return (
                  <OnGoingCard
                    key={index}
                    data={details}
                    onPress={() => navigation.navigate("viewjob", { index })}
                  />
                );
              })
            ) : (
              <Empty />
            )}
          </View>
        </ScrollView>
      </Background>
      <Loader isVisible={load} />
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  dateBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(25),
  },

  TaskMain: {
    paddingHorizontal: moderateScale(20),
    marginVertical: verticalScale(20),
  },
});
