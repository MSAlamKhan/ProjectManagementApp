import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import MaterialICons from "react-native-vector-icons/MaterialIcons";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { Colors } from "../../utils/Color";
import { Font } from "../../utils/font";

const NotificationCard = ({ notification_data, type }) => {
  return (
    <View>
      {notification_data.map((data, index) => (
        <View key={index} style={styles.InnerBox}>
          <View>
            {data.type == 'Reminder'? <Text style={styles.TypeText}>{data.type}</Text> : null }
           
            {data.type == "Reminder" ? null : (
              <Text style={styles.TitleText}>{data.title}</Text>
            )}
          </View>

          <Text
            style={
              styles.DescText}>
            {data.description}
          </Text>

          <View
            style={[GlobalStyle.RowBetween, { marginTop: verticalScale(10) }]}
          >
            <View style={styles.TimeView}>
              <MaterialICons name={"access-time"} color={Colors.Black} />
              <Text style={styles.TimeText}>{data.time}</Text>
            </View>

            {/* <Text style={styles.StatusText}>{data.status}</Text> */}
          </View>
        </View>
      ))}
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({


  InnerBox: {

    backgroundColor: Colors.White,
    borderRadius: scale(10),
    padding: scale(20),
    marginVertical: verticalScale(15)
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
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
    marginLeft: moderateScale(5),
  },

  StatusText: {
    color: Colors.Blue,
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
  },
});
