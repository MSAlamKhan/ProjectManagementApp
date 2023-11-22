import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { Font } from "../../../utils/font";

import moment from "moment";
import Feather from "react-native-vector-icons/Feather";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Platform,
  Pressable,
} from "react-native";
const JobCard = ({ data, onPress, onDone, selected }) => {
  return (
    <Pressable
      android_ripple={{
        color: Colors.Red,
      }}
      disabled={data?.color != Colors.Red}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.Main, { borderColor: data?.color }]}
    >
      <View style={GlobalStyle.RowBetween}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.Heading]}>Title:&nbsp;</Text>
          <Text style={styles.DescText}>{data?.task_title}</Text>
        </View>
        {data?.color == Colors.Red && (
          <Feather name={"alert-circle"} size={scale(22)} color={Colors.Red} />
        )}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>budget:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.costing}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Start Date:&nbsp;</Text>
        <Text style={styles.DescText}>
          {moment(data?.start_date).format("MMM Do YY")}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Dead line:&nbsp;</Text>
        <Text style={styles.DescText}>
          {moment(data?.deadline_date).format("MMM Do YY")}
        </Text>
      </View>

      {data.task_status == "Completed" ? null : (
          <TouchableOpacity
            onPress={onDone}
            style={[
              styles.DoneBox,
              { backgroundColor: selected ? Colors.Blue : Colors.White },
            ]}
          >
            <Text
              style={[
                styles.DescText,
                { color: selected ? Colors.White : Colors.Black },
              ]}
            >
              DONE
            </Text>
          </TouchableOpacity>
        )}
    </Pressable>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  Main: {
    overflow: "hidden",
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: 3,
    borderColor: "#A4A9CE",
    marginVertical: verticalScale(15),
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  BlackText: {
    fontSize: scale(18),
    fontFamily: Font.AnekBangla700,
    color: Colors.Black,
  },

  DescText: {
    fontFamily: Font.AnekBangla500,
    fontSize: scale(16),
    color: Colors.Black,
  },
  DoneBox: {
    borderWidth: 3,
    borderRadius: scale(14),
    borderColor: Colors.Blue,
    backgroundColor: Colors.White,
    paddingVertical: verticalScale(2),
    paddingHorizontal: moderateScale(10),
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  Heading: {
    color: Colors.Black,
    fontSize: scale(20),
    fontFamily: Font.AnekBangla700,
  },
});
