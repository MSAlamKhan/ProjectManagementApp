import React, { useState } from "react";
import moment from "moment";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { Colors } from "../../../utils/Color";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Font } from "../../../utils/font";
import OnGoingCard from "../../../components/common/Cards/OnGoingCard";

const Calendar = ({navigation}) => {
    // 
    // 
    // 
    // Install shower pan
    // Water Test pan
    const task_details = [
        { id: 1, name: 'Remove toilet', backgroundColor: '#FFB017', jobNumber : 1, address : "test address 1", contact:"123123123" },
        { id: 2, name: 'Intstall shower valve', backgroundColor: '#42CF96', jobNumber : 2, address : "test address 2", contact:"123123123" },
        { id: 3, name: 'Install shower drain', backgroundColor: '#E48FFF', jobNumber : 3, address : "test address 3", contact:"123123123" },
     
    ]

    const [dateSelect, setDateSelect] = useState(false);

    const handleDatePress = (index) => {
        setDateSelect(index);
        console.log("setDateSelect", dateSelect);
    };
    const currentDate = moment(); // Current date and time
    const formattedDates = [];

    for (let i = 0; i < 14; i++) {
        const formattedDate = {
            date: currentDate.clone().add(i, "days").format("D"),
            day: currentDate.clone().add(i, "days").format("ddd"),
        };
        formattedDates.push(formattedDate);
    }

    return (
        <SafeAreaView style={GlobalStyle.safeAreaStyle}>

        <Background>
            <BackIcon />

            <ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.dateBoxContainer}>
                    {formattedDates.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleDatePress(index)}
                            style={[
                                styles.dateBox,
                                {
                                    backgroundColor:
                                        dateSelect == index ? Colors.DateSelect : Colors.White,
                                },
                            ]}
                        >
                            <Text style={[styles.date,{color: dateSelect == index ?  Colors.White :Colors.Black }]}>{item.date}</Text>
                            <Text style={[styles.day,{color: dateSelect == index ?  Colors.White :Colors.Black }]}>{item.day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.TaskMain}>

                <Text style={GlobalStyle.BlackText}>Ongoing</Text>

                {task_details.map((details,index)=>{
                    return(
                        <OnGoingCard key={index} data = {details} onPress= {()=>navigation.navigate('viewjob')} />
                    )
                })}
             
               
            </View>
            </ScrollView>
        </Background>
        </SafeAreaView>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    dateBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        marginTop: verticalScale(25),
    },
    dateBox: {
        backgroundColor: Colors.Black,
        height: verticalScale(100),
        width: scale(60),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: scale(12),
    },
    date: {
        color: "white",
        fontSize: scale(24),
        fontFamily: Font.AnekBangla700,
    },
    day: {
        color: "white",
        fontSize: scale(20),
        fontFamily: Font.AnekBangla500,
    },

    TaskMain:{
        paddingHorizontal:moderateScale(20),
        marginVertical:verticalScale(20)
    }
});
