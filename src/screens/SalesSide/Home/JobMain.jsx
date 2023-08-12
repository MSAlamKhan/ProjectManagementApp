import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../../../components/common/Background'
import BackIcon from '../../../components/common/BackIcon'
import { GlobalStyle } from '../../../constant/GlobalStyle'
import MenuSelectComponent from '../../../components/common/MenuSelectComponent'
import JobCard from '../../../components/common/Cards/JobCard'
import { Colors } from '../../../utils/Color'
import { moderateScale, scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const JobMain = ({navigation}) => {
    sample = [
        { id: 1, description: 'HEllo', alert: false },
        { id: 2, description: 'HEllo', alert: true },
        { id: 3, description: 'HEllo', alert: true }, { id: 4, description: 'HEllo', alert: false },
        { id: 5, description: 'HEllo', alert: false },

    ]



    return (
        <Background>
            <BackIcon />

            <View style={GlobalStyle.ph20flex}>

                <MenuSelectComponent
                    menuFirst={'New'}
                    menuSecond={'In Progress'}
                    menuThird={'Completed'}
                    firstData={sample}
                    secondData={sample}
                    thirdData={sample}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('addlead',{type:'addnew'})} style={styles.AddLead}>
                    <MaterialIcons name={'post-add'} size={scale(50)} color={Colors.White} style={styles.Icon} />
                </TouchableOpacity>
            </View>
            <View style={GlobalStyle.Height} />

        </Background>
    )
}

export default JobMain

const styles = StyleSheet.create({

    WhiteView: {
        paddingHorizontal: moderateScale(15),
    },
    Icon: {
        position: 'absolute',
        bottom:0,
        right:0,
        zIndex:1,
        backgroundColor: Colors.Blue,
        borderRadius:scale(35),
        padding:scale(6)

    },
    AddLead:{
      
       
    }
})