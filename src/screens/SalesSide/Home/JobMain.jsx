import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import MenuSelectComponent from "../../../components/common/MenuSelectComponent";
import { Colors } from "../../../utils/Color";
import { moderateScale, scale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getSalesLead } from "../../../redux/actions/UserAction";

const JobMain = ({ navigation }) => {
  const dispatch = useDispatch();
  const getJobsData = useSelector((state) => state.get_saleslead_data);
    useEffect(() => {
      dispatch(getSalesLead());
    }, [getJobsData]);

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />

        <View style={GlobalStyle.ph20flex}>
          <MenuSelectComponent
            menuFirst={"New"}
            menuSecond={"In Progress"}
            menuThird={"Completed"}
            firstData={getJobsData?.pending}
            secondData={getJobsData?.inprogress}
            thirdData={getJobsData?.completed}
          />
        </View>
        <View style={GlobalStyle.Height} />
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => navigation.navigate("addlead", { type: "addnew" })}
        >
          <MaterialIcons
            name={"post-add"}
            size={scale(35)}
            color={Colors.White}
          />
        </TouchableOpacity>
      </Background>
    </SafeAreaView>
  );
};

export default JobMain;

const styles = StyleSheet.create({
  WhiteView: {
    paddingHorizontal: moderateScale(15),
  },
  Icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: Colors.Blue,
    borderRadius: scale(35),
    padding: scale(7),
  },
});
