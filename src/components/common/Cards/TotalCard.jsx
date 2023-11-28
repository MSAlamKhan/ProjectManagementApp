import { StyleSheet, Text, View,Platform,Pressable} from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { GlobalStyle } from '../../../constant/GlobalStyle'
import { Font } from '../../../utils/font'
import { Colors } from '../../../utils/Color'

const TotalCard = ({total,amount,color, onPress,onLongPress}) => {
  return (
    <Pressable delayLongPress={150} android_ripple={{color:Colors.Main}} onLongPress={onLongPress} activeOpacity={0.7} style={[styles.Main,{backgroundColor:color,overflow:'hidden',}]} onPress={onPress}>
      <Text style={[GlobalStyle.SimpleText,{textAlign:'center'}]}>{total}</Text>
      <View style={styles.AmountView}>
        <Text style={styles.AmountText}>{amount}</Text>
      </View>
    </Pressable>
  )
}

export default TotalCard

const styles = StyleSheet.create({
    Main:{
      
        height: verticalScale(139),
        width: scale(128),
        borderRadius: scale(20),
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: moderateScale(10),
        paddingTop:verticalScale(10),
        marginHorizontal:verticalScale(5),
        marginVertical: verticalScale(10),
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
    AmountView:{
        flex:1,
        justifyContent:'center'
    },
    AmountText:{
        fontFamily: Font.AnekBangla700,
        fontSize:scale(34),
        color: Colors.White
    }
})