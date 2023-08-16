import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../../../components/common/Cards/TaskCard'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'

const AllTask = ({route,navigation}) => {
  
const {type,time} = route.params;
  console.log('type dekhle',type)
  console.log('time', time)
  return (
    <Background>
        <BackIcon/>

        <View style={GlobalStyle.ph20flex}>

      <TaskCard  onPress = {()=>navigation.navigate('completejob',{type:type,time:time})} />
        </View>
    </Background>
  )
}

export default AllTask

const styles = StyleSheet.create({})