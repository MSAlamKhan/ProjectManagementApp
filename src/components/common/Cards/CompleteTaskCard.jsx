import React from "react";
import { Font } from "../../../utils/font";
import { Colors } from "../../../utils/Color";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import moment from "moment";

const CompleteTaskCard = ({ data, type, time,number }) => {
  const index = number + 1
  return (
    <View style={styles.MainBox}>
      <Text style={styles.Heading}>Task {index}</Text>

      <View style={GlobalStyle.RowBetween}>
        <View style={styles.WhiteBox}>
          <Text style={styles.SubHeading}>Completion Date</Text>
          <Text style={styles.Detail}> {moment(data?.complete_date).format("MMM/Do/YY")}</Text>
        </View>

        <View style={styles.WhiteBox}>
          <Text style={styles.SubHeading} numberOfLines={2}>
            Job Title
          </Text>
          <View style={styles.TitleContainer}>
            <Text style={styles.Title}>{data.task_title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.WhiteBox}>
        <Text style={styles.SubHeading}>Job Description:</Text>
        <Text style={styles.Detail}>{data.task_description}</Text>
      </View>

      {/* If completed jobs and is late */}
      {type == "completed" ? (
        time == "late" ? (
          <View style={styles.WhiteBox}>
            <Text style={[styles.SubHeading, { color: Colors.Red }]}>
              Late Reason:
            </Text>
            <Text style={styles.Detail}>I was sick</Text>
          </View>
        ) : (
          <View style={styles.WhiteBox}>
            <Text style={[styles.SubHeading, { color: Colors.Green }]}>
              On Time
            </Text>
          </View>
        )
      ) : null}
    </View>
  );
};

export default CompleteTaskCard;

const styles = StyleSheet.create({
  MainBox: {
    paddingTop: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: Colors.Blue,
    marginVertical: verticalScale(15),
  },
  Heading: {
    fontFamily: Font.AnekBangla600,
    color: Colors.White,
    fontSize: scale(16),
  },
  WhiteBox: {
    paddingHorizontal: moderateScale(15),
    borderColor: Colors.Black,
    borderWidth: 1,
    paddingVertical: verticalScale(5),
    marginVertical: verticalScale(10),
    backgroundColor: Colors.White,
  },
  TitleContainer: {
    flex: 1, // Add flex property to allow wrapping
    maxWidth: "100%", // You can adjust this value as needed
  },
  Title: {
    color: Colors.Black,
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
    // backgroundColor:'red',
    // maxWidth: '95%'
  },
  SubHeading: {
    color: Colors.Black,
    fontSize: scale(17),
    fontFamily: Font.AnekBangla600,
  },
  Detail: {
    color: Colors.Black,
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
  },
});
