import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'

import TaskCard from '../../../components/common/Cards/TaskCard'

const TaskScreen = () => {
    return (
        <Background>
            <BackIcon />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={GlobalStyle.ph20}>

                    <TaskCard  />


                </View>
            </ScrollView>
        </Background>
    )
}

export default TaskScreen

const styles = StyleSheet.create({})