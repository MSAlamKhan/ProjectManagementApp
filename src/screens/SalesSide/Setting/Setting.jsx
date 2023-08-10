import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Setting = () => {
  data = [
    { id: 1, name: "Profile Edit" },
    { id: 1, name: "Terms and Conditions" },
    { id: 1, name: "Help" },
    { id: 1, name: "Logout", type: "logout" },
  ];
  return (
    <Background>
      <BackIcon />

      <View style={GlobalStyle.ph20flex}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity activeOpacity={0.7}  style={styles.Box}>
              <Text style={styles.Text}>{item.name}</Text>
              {item.type ? (
                <MaterialIcons
                  name={"logout"}
                  size={scale(20)}
                  color={Colors.IconColor}
                />
              ) : null}
            </TouchableOpacity >
          );
        })}
      </View>
    </Background>
  );
};

export default Setting;

const styles = StyleSheet.create({
  Box: {
    paddingHorizontal: moderateScale(20),
    height: verticalScale(45),
    backgroundColor: Colors.White,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
    marginVertical: verticalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text: {
    color: Colors.GreyText,
    fontSize: scale(16),
    fontFamily: Font.AnekBangla500,
  },
});