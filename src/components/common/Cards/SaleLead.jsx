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
  Platform,
  Pressable,
} from "react-native";

const SaleLead = ({ data, onPress}) => {
  return (
    <Pressable
      android_ripple={{
        color: Colors.Main,
      }}
      onPress={onPress}
      style={[styles.Main, { borderColor: data?.color }]}
    >
      <View style={GlobalStyle.RowBetween}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.Heading]}>Title:&nbsp;</Text>
          <Text style={styles.DescText}>{data?.work_scope}</Text>
        </View>
        {data?.color == Colors.Red && (
          <Feather name={"alert-circle"} size={scale(22)} color={Colors.Red} />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Name:&nbsp;</Text>
        <Text style={styles.DescText}>
          {data?.firstname}&nbsp;{data.lastname}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>scope:&nbsp;</Text>
        <Text style={styles.DescText}>
          {data?.work_scope}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>budget:&nbsp;</Text>
        <Text style={styles.DescText}>${Number(data?.work_budget).toFixed(2)}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Date of finalization:&nbsp;</Text>
        <Text style={styles.DescText}>
          {moment(data?.date_finalization).format("MMM Do YY")}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Address:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.task_address}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Number:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.phone_number}</Text>
      </View>
    </Pressable>
  );
};

export default SaleLead;

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
  DescText: {
    fontFamily: Font.AnekBangla500,
    fontSize: scale(16),
    color: Colors.Black,
  },
  Heading: {
    color: Colors.Black,
    fontSize: scale(20),
    fontFamily: Font.AnekBangla700,
  },
});
