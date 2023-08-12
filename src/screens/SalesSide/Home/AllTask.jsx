import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../../../components/common/Cards/TaskCard'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'

const AllTask = ({route}) => {
  type = route.params;
  console.log('type', type)
  return (
    <Background>
        <BackIcon/>

        <View style={GlobalStyle.ph20flex}>

      <TaskCard type={type}/>
        </View>
    </Background>
  )
}

export default AllTask

const styles = StyleSheet.create({})