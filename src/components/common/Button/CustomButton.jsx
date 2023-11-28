import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import Zocial from "react-native-vector-icons/Zocial";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[styles.containerStyle, props.containerRestyle]}
    >
      {props.facebook ? (
        <MaterialIcons
          name="facebook"
          color={props.iconcolor ? props.iconcolor : Colors.Black}
          size={scale(20)}
        />
      ) : null}

      {props.google ? (
        <AntDesign
          name="google"
          color={props.iconcolor ? props.iconcolor : Colors.Black}
          size={scale(20)}
        />
      ) : null}

      {props.email ? (
        <Zocial
          name="email"
          color={props.iconcolor ? props.iconcolor : Colors.Black}
          size={scale(20)}
        />
      ) : null}

      {props.loader ? (
        <ActivityIndicator size={20} color={Colors.Main} />
      ) : (
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(10),
    backgroundColor: Colors.Blue,
    height: verticalScale(52),
    flexDirection: "row",
  },

  font: {
    color: Colors.White,
    fontSize: scale(16),
    fontFamily: Font.AnekBangla500,
    letterSpacing: 0.5,
  },
});
