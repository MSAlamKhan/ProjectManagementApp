import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'
import CompleteTaskCard from '../../../components/common/Cards/CompleteTaskCard'

const CompletedJob = () => {
    const data = [
        {id:1,complete_date:'12/3/23',job_title:'Remodeling',description:'tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra'},
        {id:2,complete_date:'2/2/23',job_title:'Redesign Lounge',description:'tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra'},
    ]
  return (
    <Background>
        <BackIcon title = {'Late Jobs Reason'}/>
      <View style={GlobalStyle.ph20flex}>

        <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item,index)=>{
                return(
                    <View>
                        <CompleteTaskCard key={index} data={item} />
                    </View>
                )
                })}

        </ScrollView>


      </View>
    </Background>
  )
}

export default CompletedJob

const styles = StyleSheet.create({})