import {
    scale,
    verticalScale,
    moderateVerticalScale,
    moderateScale,
  } from 'react-native-size-matters';
  import {Colors} from '../utils/Colors';
  import {Font} from '../utils/font';
import { Color } from '../utils/Color';
  
  export const GlobalStyle = {
    Container: {
      flex: 1,
      backgroundColor: Color.Main,
    },
    LightContainer: {
      flex: 1,
      backgroundColor: Color.White,
    },
    SkyBlueContainer: {
      flex: 1,
      backgroundColor: '#F3F6FF',
    },
  
    GreyBox: {
      borderTopLeftRadius: scale(20),
      borderTopRightRadius: scale(20),
      flex: 1,
      backgroundColor: Color.GreyBox,
      paddingHorizontal: moderateScale(15),
    },
  
    errorblack: {
      color: Color.Black,
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
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    RowBetween : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems:'center',
    
    },
   
  
    ModalText: {
      fontSize: scale(16),
      textAlign: 'center',
      padding: moderateScale(20),
      fontFamily: Font.Gilroy600,
      color: Color.ThemeBlue,
    },
    ModalContainer: {
      justifyContent: 'center',
      width: '70%',
      borderRadius: scale(10),
      backgroundColor: Color.Main,
      alignSelf: 'center',
    },
    MainModal: {
      justifyContent: 'center',
      margin: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    ModalLine: {
      width: '25%',
      height: verticalScale(4),
      backgroundColor: Color.Grey,
      alignSelf: 'center',
      borderRadius: scale(10),
      marginTop: verticalScale(20),
    },
   
    Height: {
      height: verticalScale(60),
    },
  
  
    boxStyles: {
      // backgroundColor: 'transparent',
      // height: verticalScale(50),
      alignItems: 'center',
      // borderRadius: scale(20),
      // marginTop: verticalScale(20),
      // borderWidth: scale(1),
      // borderColor: Color.White,
      flexDirection: 'row',
      marginTop: verticalScale(20),
      paddingHorizontal: moderateScale(20),
      height: verticalScale(50),
      backgroundColor: Color.White,
      borderWidth: scale(1),
      borderColor: Color.White,
      borderRadius: scale(25),
    },
    inputStyles: {
      color: Color.placeholderTextColor,
      fontSize: scale(16),
      fontFamily: Font.Poppins600,
    },
    dropdownTextStyles: {
      color: Color.Black,
      fontFamily: Font.Poppins600,
      fontSize:scale(14)
      
    },
    dropdownItemStyles: {
      backgroundColor: Color.White,
    },
    dropdownStyles: {
      backgroundColor: Color.White,
      borderWidth: scale(1),
      borderColor: Color.placeholderTextColor,
    },
  };
  