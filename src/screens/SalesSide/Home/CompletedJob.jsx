import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'
import CompleteTaskCard from '../../../components/common/Cards/CompleteTaskCard'

const CompletedJob = ({route}) => {

  const {type,time} = route.params;
  console.log('type',type)
  console.log('time', time)
    const data = [
        {id:1,complete_date:'12/3/23',job_title:'Remodeling',description:'tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra'},
        {id:2,complete_date:'2/2/23',job_title:'Redesign Lounge',description:'tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra'},
    ]
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>

    <Background>
        <BackIcon title = {'Task Details'}/>
      <View style={GlobalStyle.ph20flex}>

        <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item,index)=>{
                return(
                    <View>
                        <CompleteTaskCard type = {type} time = {time}  key={index} data={item} />
                    </View>
                )
                })}

        </ScrollView>


      </View>
    </Background>
    </SafeAreaView>
  )
}

export default CompletedJob

const styles = StyleSheet.create({})