import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import Feather from "react-native-vector-icons/Feather";
import { Font } from "../../../utils/font";

const TaskCard = ({type,...props}) => {
  console.log("type", type);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={styles.Main}>
      <View style={styles.HeadingView}>
        <Text style={styles.Heading}>Task 1</Text>
      </View>
      {/* {type &&  (
        <Text style={styles.Red}>
          REASON: I was not able to come because of a family emergency
        </Text>
      )} */}

      <View style={GlobalStyle.Row}>
        <View
          style={{
            paddingHorizontal: moderateScale(10),
            marginTop: verticalScale(10),
          }}
        >
          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Customer Name:</Text>
            <Text style={styles.Detail}>Lorem ipsum</Text>
          </View>

          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Date of finalization:</Text>
            <Text style={styles.Detail}>Lorem ipsum</Text>
          </View>

          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Task Address:</Text>
            <Text style={styles.Detail}>Lorem ipsum</Text>
          </View>

          <View style={GlobalStyle.Row}>
            <Text style={styles.Title}>Description:</Text>
            <Text style={styles.Detail}>Lorem Ipsum</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.Black,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
    overflow: "hidden",
    borderColor: Colors.borderColor,
    borderWidth: 2,
    borderRadius: scale(10),
  },
  Red: {
    fontSize: scale(16),
    fontFamily: Font.AnekBangla700,
    color: Colors.Red,
    textAlign: "center",
    marginVertical: verticalScale(5),
  },
  HeadingView: {
    backgroundColor: Colors.Blue,
    // flex: 1,
    borderRadius: scale(10),
    alignItems: "center",
    width: "100%",
  },
  Heading: {
    fontSize: scale(18),
    fontFamily: Font.AnekBangla700,
    color: Colors.White,
  },
  Title: {
    fontSize: scale(14),
    fontFamily: Font.AnekBangla600,
    color: Colors.GreyText,
  },

  Detail: {
    fontFamily: Font.AnekBangla500,
    fontSize: scale(14),
    color: Colors.White,
    marginLeft: moderateScale(15),
    maxWidth: "80%",
  },
});
