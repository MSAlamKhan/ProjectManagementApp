import { StyleSheet, Text, View, TouchableOpacity,Platform} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import Feather from "react-native-vector-icons/Feather";
import { Font } from "../../../utils/font";

const JobCard = ({data,onPress,menu}) => {

  console.log('menu', menu)
  
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}
      style={[styles.Main, { borderColor: data.alert && menu == 'third' ? Colors.Red : "#A4A9CE" }]}
    >
      <View style={GlobalStyle.RowBetween}>
        <Text style={styles.BlackText}>Job no.{data.id}</Text>
        {data.alert && menu == 'third' ? (
          <Feather name={"alert-circle"} size={scale(22)} color={Colors.Red} />
        ) : null}
      </View>

      <Text style={styles.DescText}>{data.description}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.Main,
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

  DescText:{
    fontFamily:Font.AnekBangla500,
    fontSize: scale(16),
    color: Colors.Black,
  }
});
