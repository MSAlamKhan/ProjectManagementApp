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
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Font } from "../../utils/font";
const BackIcon = (props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: moderateScale(20),
        flexDirection: "row",
        alignItems: "center",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: Colors.Blue,
          alignItems: "center",
          justifyContent: "center",
          width: scale(36),
          height: scale(36),
          marginVertical: verticalScale(20),
          borderRadius: 100,
        }}
      >
        <Entypo
          name="chevron-small-left"
          color={Colors.White}
          size={scale(30)}
        />
      </TouchableOpacity>

      {props.title && (
        <View style={styles.TextView}>
          <Text style={styles.Text}>{props.title}</Text>
        </View>
      )}
    </View>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  Text: {
    fontFamily: Font.AnekBangla700,
    color: Colors.Black,
    fontSize: scale(24),
    textAlign: "center",
  },
  TextView: {
    flex: 1,
  },
});
