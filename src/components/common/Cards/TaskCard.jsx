import React from "react";
import moment from "moment";
import { Font } from "../../../utils/font";
import { Colors } from "../../../utils/Color";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  ms,
  scale,
  verticalScale,
  s,
} from "react-native-size-matters";

const TaskCard = ({ onPress, data, number }) => {
  const index = number + 1;
  return (
    <Pressable
      android_ripple={{ color: Colors.Main }}
      onPress={onPress}
      style={styles.Main}
    >
      <View style={styles.HeadingView}>
        <Text style={styles.Heading}>Task {index}</Text>
      </View>

      <View style={GlobalStyle.Row}>
        <View
          style={styles.Pad}
        >
          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Customer Name:</Text>
            <Text style={styles.Detail}>{data.task_title}</Text>
          </View>

          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Date of finalization:</Text>
            <Text style={styles.Detail}>
              {moment(data?.deadline_date).format("MMM Do YY")}
            </Text>
          </View>

          <View style={{ flexDirection: "row", width: "95%" }}>
            <Text style={styles.Title}>Description:</Text>
            <Text style={styles.Detail}>{data.task_description}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  Main: {
    borderWidth: 2,
    overflow: "hidden",
    borderRadius: s(10),
    marginTop: verticalScale(5),
    backgroundColor: Colors.White,
    borderColor: Colors.borderColor,
    paddingVertical: verticalScale(15),
    paddingHorizontal: ms(20),
  },
  Red: {
    fontSize: s(16),
    color: Colors.Red,
    textAlign: "center",
    fontFamily: Font.AnekBangla700,
    marginVertical: verticalScale(5),
  },
  HeadingView: {
    width: "100%",
    alignItems: "center",
    borderRadius: scale(10),
    backgroundColor: Colors.Blue,
  },
  Heading: {
    fontSize: s(18),
    color: Colors.White,
    fontFamily: Font.AnekBangla700,
  },
  Title: {
    fontSize: s(14),
    color: Colors.GreyText,
    fontFamily: Font.AnekBangla600,
  },

  Detail: {
    fontSize: s(14),
    maxWidth: "80%",
    color: Colors.Black,
    fontFamily: Font.AnekBangla500,
    marginLeft: ms(15),
  },
  pad:{
    paddingHorizontal: ms(10),
    marginTop: verticalScale(10),
  }
});
