import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/Color'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Font } from '../../../utils/font'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyle } from '../../../constant/GlobalStyle'
import { useNavigation } from '@react-navigation/native'

const OnGoingCard = ({ data, ...props }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.Main, { backgroundColor: data.backgroundColor }]} onPress={props.onPress}>
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <Text style={[styles.Heading]}>Title:  </Text>
                <Text style={styles.Title}>{data.name}</Text>
            </View>

            <View style={{ alignSelf:'flex-end',marginTop:verticalScale(5) }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('taskscreen')} 
                    style={styles.MoreView}>
                    <Text style={styles.MoreText}>More</Text>
                    <View style={styles.Box}>
                        <MaterialIcons
                            name={'keyboard-arrow-right'}
                            color={Colors.Black}
                            size={scale(16)}
                        />
                    </View>
                </TouchableOpacity>
            </View>





        </TouchableOpacity>
    )
}

export default OnGoingCard

const styles = StyleSheet.create({

    Main: {
        borderRadius: scale(16),
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(18),
        backgroundColor: 'red',
        marginVertical: verticalScale(15),
        // alignItems: 'center'

    },
    Heading: {
        color: Colors.Black,
        fontSize: scale(20),
        fontFamily: Font.AnekBangla700
    },
    Title: {
        color: Colors.White,
        fontSize: scale(18),
        fontFamily: Font.AnekBangla600,
    },
    MoreView: {
        borderRadius: scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.White,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(3),
    },
    MoreText: {
        fontFamily: Font.AnekBangla500,
        fontSize: scale(12),
        color: '#303030',
    },
    Box: {
        borderRadius: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#303030',
        marginLeft: moderateScale(5),
   
    },

})