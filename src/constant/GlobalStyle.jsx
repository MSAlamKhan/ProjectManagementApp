import {
  scale,
  verticalScale,
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

import { Font } from "../utils/font";
import { Colors } from "../utils/Color";
import { StyleSheet } from "react-native";
export const GlobalStyle = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "#97C1F2",
  },
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  LightContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  SkyBlueContainer: {
    flex: 1,
    backgroundColor: "#F3F6FF",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  GreyBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.GreyBox,
    paddingHorizontal: moderateScale(15),
  },

  errorblack: {
    color: Colors.Black,
    fontSize: scale(12),
    marginLeft: scale(5),
    marginBottom: verticalScale(-10),
    fontFamily: Font.AnekBangla500,
    top: scale(1),
  },

  ph20flex: {
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  ph20: {
    paddingHorizontal: moderateScale(20),
  },

  Row: {
    flexDirection: "row",
    alignItems: "center",
  },

  RowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BlueText: {
    fontSize: scale(36),
    fontFamily: Font.AnekBangla700,
    color: Colors.Blue,
  },
  BlackText: {
    fontSize: scale(24),
    fontFamily: Font.AnekBangla700,
    color: Colors.Black,
  },

  SimpleText: {
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
    color: Colors.White,
  },

  ModalText: {
    fontSize: scale(16),
    textAlign: "center",
    padding: moderateScale(20),
    fontFamily: Font.Gilroy600,
    color: Colors.ThemeBlue,
  },
  ModalContainer: {
    justifyContent: "center",
    width: "70%",
    borderRadius: scale(10),
    backgroundColor: Colors.Main,
    alignSelf: "center",
  },
  MainModal: {
    justifyContent: "center",
    margin: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  ModalLine: {
    width: "25%",
    height: verticalScale(4),
    backgroundColor: Colors.Grey,
    alignSelf: "center",
    borderRadius: scale(10),
    marginTop: verticalScale(20),
  },

  Height: {
    height: verticalScale(60),
  },

  boxStyles: {
    // backgroundColor: 'transparent',
    // height: verticalScale(50),
    alignItems: "center",
    // borderRadius: scale(20),
    // marginTop: verticalScale(20),
    // borderWidth: scale(1),
    // borderColor: Colors.White,
    flexDirection: "row",
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    height: verticalScale(50),
    backgroundColor: Colors.White,
    borderWidth: scale(1),
    borderColor: Colors.White,
    borderRadius: scale(25),
  },
  inputStyles: {
    color: Colors.placeholderTextColor,
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  dropdownTextStyles: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
  },
  dropdownItemStyles: {
    backgroundColor: Colors.White,
  },
  dropdownStyles: {
    backgroundColor: Colors.White,
    borderWidth: scale(1),
    borderColor: Colors.placeholderTextColor,
  },
});
