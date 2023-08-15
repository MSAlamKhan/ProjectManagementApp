import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";
import CustomButton from "../Button/CustomButton";

const LateCard = ({ data, ...props }) => {
 
    
  
  return (
    <View style={styles.Box}>
      <Text style={styles.Title}>{data.reason}</Text>
      <Text style={styles.Detail}>{data.details}</Text>

      <CustomButton
        title={props.select == data.id ? "SELECTED" : "SELECT"}
        containerRestyle={{
          height: verticalScale(45),
          marginVertical: verticalScale(10),
          backgroundColor: props.select == data.id ? Colors.Main : Colors.Blue,
        }}
        onPress={data.reason == "Other" ? props.onPressReason : props.onPress}
      />
    </View>
  );
};

export default LateCard;

const styles = StyleSheet.create({
  Box: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(15),
    borderColor: Colors.Black,
    borderWidth: 2,
    justifyContent: "center",
    marginVertical: verticalScale(10),
    backgroundColor: Colors.White,
  },
  Title: {
    fontFamily: Font.AnekBangla700,
    color: Colors.Black,
    fontSize: scale(17),
  },
  Detail: {
    fontFamily: Font.AnekBangla500,
    color: Colors.Black,
    fontSize: scale(14),
  },
});
