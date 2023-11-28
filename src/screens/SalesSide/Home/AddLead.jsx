import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { JOB_DATA } from "../../../redux/reducer";
import { AddJob } from "../../../redux/actions/UserAction";

import Background from "../../../components/common/Background";
import JobForm from "../../../components/common/Cards/JobForm";
import BackIcon from "../../../components/common/BackIcon";
import CustomLotti from "../../../components/common/Modals/CustomLotti";
import Loader from "../../../components/common/Modals/LoaderModal";

const AddLead = ({ navigation, route }) => {
  const { type } = route.params;
  const date = useSelector((state) => state.selecteddate);
  const [allImages, setAllImages] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [successModal, setSuccessModal] = useState(false);
  console.log("allImages =============>", allImages);
  console.log("allVideos =============>", allVideos);
  const dispatch = useDispatch();

  const onSubmit = (obj) => {
    const data = { ...obj };
    dispatch({ type: JOB_DATA, payload: { data } });

    dispatch(
      AddJob(
        data,
        allImages,
        allVideos,
        date,
        setLoading,
        setSuccessModal,
        navigation
      )
    );
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
                getVideos: setAllVideos,
              })
            }
            onVideoPress={() =>
              navigation.navigate("imageselection", {
                type: "video",
                title: "Upload Video",
                getImages: setAllImages,
                getVideos: setAllVideos,
              })
            }
          />
          <View style={{ marginVertical: verticalScale(20) }} />
        </View>
      </ScrollView>
      <CustomLotti
        isVisible={successModal}
        source={require("../../../assets/lotti/success.json")}
        Title={type == "edit" ? "Saved!" : "Job Added!"}
      />
      <Loader isVisible={loading} />
    </Background>
  );
};

export default AddLead;

const styles = StyleSheet.create({});
