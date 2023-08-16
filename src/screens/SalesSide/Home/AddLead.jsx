import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Background from "../../../components/common/Background";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import JobForm from "../../../components/common/Cards/JobForm";
import BackIcon from "../../../components/common/BackIcon";
import CustomButton from "../../../components/common/Button/CustomButton";
import { verticalScale } from "react-native-size-matters";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { JOB_DATA } from "../../../redux/reducer/Holder";
import CustomLotti from "../../../components/common/Modals/CustomLotti";

const AddLead = ({ navigation, route }) => {
  const [allImages, setAllImages] = useState([]);

  const { type, imageChoosen } = route.params;
  console.log("type", imageChoosen);

  const [successModal, setSuccessModal] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const dispatch = useDispatch();

  const onSubmit = (obj) => {
    const data = { ...obj };
    data.imagesAll = allImages;
    console.log("data ========>", data);
    dispatch({ type: JOB_DATA, payload: { data } });
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      navigation.goBack();
    }, 3000);
  };
  return (
    <Background>
      <BackIcon />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.ph20}>
          <JobForm
            onSubmit={onSubmit}
            type={type}
            onCameraPress={() =>
              navigation.navigate("imageselection", {
                type: "image",
                title: "Upload Image",
                getImages: setAllImages,
              })
            }
            onVideoPress={() =>
              navigation.navigate("imageselection", {
                type: "video",
                title: "Upload Video",
              })
            }
          />
          <View style={{ marginVertical: verticalScale(20) }}></View>
        </View>
      </ScrollView>
      <CustomLotti
        isVisible={successModal}
        source={require("../../../assets/lotti/success.json")}
        Title={type == "edit" ? "Saved!" : "Job Added!"}
      />
    </Background>
  );
};

export default AddLead;

const styles = StyleSheet.create({});
