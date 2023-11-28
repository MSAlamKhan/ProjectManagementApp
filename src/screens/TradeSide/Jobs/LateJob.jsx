import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import LateCard from "../../../components/common/Cards/LateCard";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import ReasonModal from "../../../components/common/Modals/ReasonModal";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/common/Button/CustomButton";
import { verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";

const LateJob = ({ navigation }) => {
  const [select, setSelect] = useState(false);
  const reasons = useSelector((state) => state.getting_late);
  console.log("reasons", reasons);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [reasonModal, setReasonModal] = useState(false);

  const onSubmit = () => {
    console.log("select", select);
  };

  const closeReasonModal = () => {
    setReasonModal(false);
  };

  const handleReason = (id) => {
    setSelect(id);
    setReasonModal(true);
  };

  return (
    <Background>
      <BackIcon title={"Select Reason for late"} />
      <View style={GlobalStyle.ph20flex}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {reasons.map((data, index) => {
            return (
              <LateCard
                key={index}
                data={data}
                select={select}
                onPressReason={() => handleReason(data.id)}
                onPress={() => setSelect(data.id)}
              />
            );
          })}

          {/* <CustomButton
            title={"SUBMIT"}
            onPress={onSubmit}
            containerRestyle={{ marginVertical: verticalScale(15) }}
          /> */}
        </ScrollView>
      </View>
      <ReasonModal
        isVisible={reasonModal}
        heading={"Other"}
        question={"Enter other reason for completing the job late:"}
        onBackdropPress={closeReasonModal}
        closeModal={closeReasonModal}
        onPressSubmit={handleSubmit(closeReasonModal)}
      />
    </Background>
  );
};

export default LateJob;

const styles = StyleSheet.create({});
