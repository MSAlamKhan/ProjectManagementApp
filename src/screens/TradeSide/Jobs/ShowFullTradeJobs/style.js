import {StyleSheet,Platform}from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../../../../utils/font';
import { Colors } from '../../../../utils/Color';

export const styles = StyleSheet.create({
    Main: {
      overflow: "hidden",
      backgroundColor: Colors.White,
      borderRadius: scale(10),
      paddingHorizontal: moderateScale(10),
      paddingVertical: verticalScale(7),
      marginHorizontal:scale(10),
      borderWidth: 3,
      borderColor: "#A4A9CE",
      marginVertical: verticalScale(15),
      ...Platform.select({
        ios: {
          shadowColor: "black",
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
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
    },
    Heading: {
      color: Colors.Black,
      fontSize: scale(20),
      fontFamily: Font.AnekBangla700,
    },
    w90:{
      width:'82%'
    }
  });