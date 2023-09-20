import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'
import MenuSelectComponent from '../../../components/common/MenuSelectComponent'
import JobCard from '../../../components/common/Cards/JobCard'
import { Colors } from '../../../utils/Color'
import { moderateScale, scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

const JobMain = ({ navigation }) => {
    sample = [
        { id: 1, description: 'Demo' },
        { id: 2, description: 'Plumbing' },
        { id: 3, description: 'Framing' }, { id: 4, description: 'Hello' },
        { id: 5, description: 'Electrical' },

    ]
    
    complete = [
        { id: 1, description: 'Tile', time: 'ontime' },
        { id: 2, description: 'Drywall', time: 'ontime' },
        { id: 3, description: 'Paint', time: 'ontime' }, { id: 4, description: 'Hello', time: 'late' },
        { id: 5, description: 'Plumbing', time: 'late' },

    ]

    const inProgress = useSelector(state => state.jobData);
    console.log('Type of inProgress:', typeof inProgress);
    


    return (
        <SafeAreaView style={GlobalStyle.safeAreaStyle}>

        
        <Background>
            <BackIcon />

            <View style={GlobalStyle.ph20flex}>
                
              {inProgress.map((gand,index)=>
                <Text style={{color:'red'}}>gand.email</Text>
              )}

                <MenuSelectComponent
                    menuFirst={'New'}
                    menuSecond={'In Progress'}
                    menuThird={'Completed'}
                    firstData={sample}
                    secondData={sample}
                    thirdData={complete}

                />
                <TouchableOpacity onPress={() => navigation.navigate('addlead', { type: 'addnew' })} style={styles.AddLead}>
                    <MaterialIcons name={'post-add'} size={scale(50)} color={Colors.White} style={styles.Icon} />
                </TouchableOpacity>
            </View>
            <View style={GlobalStyle.Height} />

        </Background>
        </SafeAreaView>
    )
}

export default JobMain

const styles = StyleSheet.create({

    WhiteView: {
        paddingHorizontal: moderateScale(15),
    },
    Icon: {
        position: 'absolute',
        bottom: -5,
        right: -8,
        zIndex: 1,
        backgroundColor: Colors.Blue,
        borderRadius: scale(35),
        padding: scale(6)

    },
    AddLead: {


    }
})