import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const BackIcon = () => {

  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: moderateScale(20) }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: Colors.Blue,
          borderRadius: scale(30),
          // padding: scale(5),
          alignItems: "center",
          justifyContent: "center",
          width: scale(36),
          height: scale(36),

          marginVertical: verticalScale(20),
        }}
      >
        <MaterialIcons
          name={"arrow-back-ios-new"}
          color={Colors.White}
          size={scale(20)}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackIcon;

const styles = StyleSheet.create({});
