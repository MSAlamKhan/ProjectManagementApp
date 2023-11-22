import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../../utils/Color";
import { scale, verticalScale } from "react-native-size-matters";
import { Font } from "../../../utils/font";

const CalenderCard = ({ data, focus, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.dateBox,
        {
          backgroundColor: focus ? Colors.DateSelect : Colors.White,
        },
      ]}
    >
      <Text
        style={[
          styles.date,
          {
            color: focus ? Colors.White : Colors.Black,
          },
        ]}
      >
        {data.date}
      </Text>
      <Text
        style={[
          styles.day,
          {
            color: focus ? Colors.White : Colors.Black,
          },
        ]}
      >
        {data.day}
      </Text>
    </TouchableOpacity>
  );
};

export default CalenderCard;

const styles = StyleSheet.create({
  dateBox: {
    backgroundColor: Colors.Black,
    height: verticalScale(100),
    width: scale(60),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: scale(12),
  },
  day: {
    color: "white",
    fontSize: scale(20),
    fontFamily: Font.AnekBangla500,
  },
  date: {
    color: "white",
    fontSize: scale(24),
    fontFamily: Font.AnekBangla700,
  },
});
