import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import JobCard from "../../../components/common/Cards/JobCard";
import { useDispatch, useSelector } from "react-redux";
import {
  DoneApi,
  SubmitReason,
  get_late,
} from "../../../redux/actions/UserAction";
import Loader from "../../../components/common/Modals/LoaderModal";
import ReasonModal from "../../../components/common/Modals/ReasonModal";
import TickModal from "../../../components/common/Modals/TickModal";
import CustomInput from "../../../components/common/Inputs/CustomInput";
import { useForm } from "react-hook-form";
import Error from "../../../components/common/Error";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../../utils/Color";

const ViewJob = ({ navigation, route }) => {
  const { index } = route.params;
  const dispatch = useDispatch();
  const task_details = useSelector((state) => state.task_details);

  const sample = task_details[index]?.tasks;

  const [load, setLoad] = useState(false);
  const [select, setSelect] = useState(false);
  const [reason, setReason] = useState({ isVisible: false, item: null });
  const [success, setSuccess] = useState(false);

  const handleDone = (item) => {
    dispatch(DoneApi(item, setLoad, setSelect, setReason, setSuccess));
    setReason((prev) => ({ ...prev, item }));
  };
  const onSubmit = (data) => {
    dispatch(SubmitReason(data.reason, reason.item.id, setLoad, setSuccess,navigation));
  };
  const handleLate = (item) => {
    dispatch(get_late(item.id, setLoad, navigation));
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <View style={GlobalStyle.ph20flex}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {sample?.map((item, index) => {
              return (
                <JobCard
                  key={index}
                  data={item}
                  selected={select}
                  onDone={() => handleDone(item)}
                  onPress={() => handleLate(item)}
                />
              );
            })}
          </ScrollView>
        </View>
      </Background>
      <Loader isVisible={load} />
      <ReasonModal
        question="what was the reason for your late services"
        isVisible={reason.isVisible}
        // onBackdropPress={() =>
        //   setReason((prev) => ({ ...prev, isVisible: false }))
        // }
        heading={"Please describe reason for late"}
        onPressSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput
          multiline
          maxLength={120}
          size={scale(24)}
          control={control}
          name="reason"
          fontSize={scale(16)}
          restyle={styles.restyle}
          boxStyle={styles.boxStyle}
          rules={{
            required: true,
          }}
        />
        {errors.reason && <Error text={"Description is required"} />}
      </ReasonModal>
      <TickModal
        isVisible={success}
        text={"Thank you for your services"}
        onBackdropPress={() => setSuccess(false)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  boxStyle: {
    paddingHorizontal: moderateScale(0),
    backgroundColor: Colors.White,
    borderRadius: scale(14),
    height: verticalScale(250),
    borderColor: Colors.White,
    alignItems: "flex-start",
  },
  restyle: {
    paddingHorizontal: moderateScale(20),
    color: Colors.Black,
  },
});

export default ViewJob;
