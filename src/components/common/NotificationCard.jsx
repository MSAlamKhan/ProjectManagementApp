import React from "react";
import moment from "moment";
import MaterialICons from "react-native-vector-icons/MaterialIcons";

import { Font } from "../../utils/font";
import { Colors } from "../../utils/Color";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const NotificationCard = ({ data }) => {
  const { created_at, message, title, type } = data;
  return (
    <View style={styles.InnerBox}>
      <View>
        {type == "Reminder" ? (
          <Text style={styles.TypeText}>{type}</Text>
        ) : (
          <Text style={styles.TitleText}>{title}</Text>
        )}
      </View>

      <Text style={styles.DescText}>{message}</Text>

      <View style={[GlobalStyle.RowBetween, { marginTop: verticalScale(10) }]}>
        <View style={styles.TimeView}>
          <MaterialICons name={"access-time"} color={Colors.Black} />
          <Text style={styles.TimeText}>
            {moment(created_at).format('MM/DD/YYYY h:mm a')} 
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  InnerBox: {
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    padding: scale(20),
    marginVertical: verticalScale(15),
    marginHorizontal: scale(15),
  },
  TypeText: {
    color: Colors.Green,
    fontSize: scale(16),
    fontFamily: Font.AnekBangla600,
  },
  TitleText: {
    color: Colors.Black,
    fontSize: scale(16),
    fontFamily: Font.AnekBangla600,
  },
  ImpDot: {
    backgroundColor: Colors.Main,
    height: scale(12),
    width: scale(12),
    borderRadius: scale(20),
    alignSelf: "center",
  },
  DescText: {
    color: "#484848",
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
    marginTop: verticalScale(10),
  },
  TimeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  TimeText: {
    color: Colors.Black,
    fontSize: scale(12),
    fontFamily: Font.AnekBangla500,
    marginLeft: moderateScale(5),
  },

  StatusText: {
    color: Colors.Blue,
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
  },
});
