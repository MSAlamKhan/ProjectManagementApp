import { StyleSheet, Text, View,ImageBackground,SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constant/GlobalStyle'
import { Color } from '../../utils/Color'

const Background = (props) => {
  return (
    <>
   {/* <StatusBar translucent/> */}
     <ImageBackground
     source={require('../../assets/images/overboard.png')}
     style={{flex:1,width:'100%'}}
     >
        {props.children}
     </ImageBackground>
     </>
  )
}

export default Background

const styles = StyleSheet.create({})