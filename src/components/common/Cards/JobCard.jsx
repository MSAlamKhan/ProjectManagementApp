import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import Feather from "react-native-vector-icons/Feather";
import { Font } from "../../../utils/font";

const JobCard = ({ data, onPress, menu, gand }) => {

  const [select, setSelect] = useState(false);

  console.log('menu', menu);

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}
      style={[styles.Main, { borderColor: data.time == 'late'  ? Colors.Red : "#A4A9CE" }]}
    >
      <View style={GlobalStyle.RowBetween}>
        <Text style={styles.BlackText}>Job no.{data.id}</Text>
        {data.time == 'late'  ? (
          <Feather name={"alert-circle"} size={scale(22)} color={Colors.Red} />
        ) : null}
      </View>

      <Text style={styles.DescText}>{data.description}</Text>
      <Text style={styles.DescText}>{data.budget}</Text>

      {gand == 'trade' && data.time == 'ontime' ?
        <TouchableOpacity onPress={() => setSelect(true)} style={[styles.DoneBox, { backgroundColor: select ? Colors.Blue : Colors.White }]}>
          <Text style={[styles.DescText, { color: select ? Colors.White : Colors.Black }]}>
            DONE
          </Text>

        </TouchableOpacity>

        :


        null}
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: 3,
    borderColor: "#A4A9CE",
    marginVertical: verticalScale(15),
    ...Platform.select({
      ios: {
        shadowColor: 'black',
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
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
