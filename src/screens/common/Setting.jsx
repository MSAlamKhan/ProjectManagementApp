import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Background from "../../components/common/Background";
import BackIcon from "../../components/common/BackIcon";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Color";
import { Font } from "../../utils/font";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { IS_SIGN_IN } from "../../redux/reducer";

const Setting = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: IS_SIGN_IN, payload: null });
  };
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />

        <View style={GlobalStyle.ph20flex}>
          <TouchableOpacity
            onPress={() => navigation.navigate("profileedit")}
            activeOpacity={0.7}
            style={styles.Box}
          >
            <Text style={styles.Text}>Profile Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.Box}>
            <Text style={styles.Text}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.Box}>
            <Text style={styles.Text}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            activeOpacity={0.7}
            style={styles.Box}
          >
            <Text style={styles.Text}>Logout</Text>

            <MaterialIcons
              name={"logout"}
              size={scale(20)}
              color={Colors.IconColor}
            />
          </TouchableOpacity>
        </View>
      </Background>
    </SafeAreaView>
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
