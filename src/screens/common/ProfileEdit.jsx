import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Background from "../../components/common/Background";
import BackIcon from "../../components/common/BackIcon";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Color";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Octicons from "react-native-vector-icons/Octicons";
import CustomInput from "../../components/common/Inputs/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/Button/CustomButton";
import Error from "../../components/common/Error";
import CustomLotti from "../../components/common/Modals/CustomLotti";
import { useDispatch, useSelector } from "react-redux";
import TickModal from "../../components/common/Modals/TickModal";
import IncorrectModal from "../../components/common/Modals/IncorrectModal";
import { EditProfileApi } from "../../redux/actions/AuthAction";
import Loader from "../../components/common/Modals/LoaderModal";

const ProfileEdit = ({ navigation }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);

  const [isEditing, setIsEditing] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [msg, setMsg] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      fname: userDetails?.firstname,
      lname: userDetails?.lastname,
      phone: userDetails?.phone_number,
      address: userDetails?.address,
      city: userDetails?.city,
      sin_no: userDetails?.sin_number,
      primary: userDetails?.primary_trade,
      secondary: userDetails?.secondary_trade,
    },
  });

  const camerasave = () => {
    let options = {
      storageOptions: {
        mediaType: "photo",
        path: "image",
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("ez pz");
      } else if (res.error) {
        console.log("ez pz win");
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setProfile({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
      }
    });
  };

  const onSubmit = (data) => {
    dispatch(
      EditProfileApi(
        data,
        profile,
        setLoading,
        setSuccessModal,
        setIsEditing,
        setMsg,
        navigation
      )
    );
  };

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={GlobalStyle.ph20}>
            <View style={{ alignItems: "center" }}>
              <View style={styles.ImageView}>
                {profile?.uri ? (
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 100 }}
                    resizeMode="contain"
                    source={{ uri: profile?.uri }}
                  />
                ) : userDetails?.profile_image ? (
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                    source={{ uri: userDetails?.profile_image }}
                  />
                ) : (
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                    source={require("../../assets/images/avengers.png")}
                  />
                )}
              </View>

              {isEditing ? (
                <TouchableOpacity
                  onPress={() => camerasave()}
                  style={styles.IconBox}
                >
                  <Octicons
                    name={"pencil"}
                    size={scale(24)}
                    color={Colors.Blue}
                    style={styles.Icon}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            <CustomButton
              containerRestyle={[
                styles.Button,
                { marginVertical: verticalScale(30) },
              ]}
              title={"Edit"}
              onPress={() => setIsEditing(true)}
            />
            <View>
              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="fname"
                placeholder="First Name"
                editable={isEditing}
                rules={{
                  required: "First Name is required",
                }}
              />
              {errors.fname && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.fname.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="lname"
                placeholder="Last Name"
                editable={isEditing}
                rules={{
                  required: "Last Name is required",
                }}
              />
              {errors.lname && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.lname.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="phone"
                keyboardType={"numeric"}
                placeholder="Phone Number"
                editable={isEditing}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please provide a valid 10-digit phone number.",
                  },
                }}
              />
              {errors.phone && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.phone.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="address"
                placeholder="Address"
                editable={isEditing}
                rules={{
                  required: "Address is required",
                }}
              />
              {errors.address && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.address.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="city"
                placeholder="City"
                editable={isEditing}
                rules={{
                  required: "City is required",
                }}
              />
              {errors.city && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.city.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="sin_no"
                keyboardType={"numeric"}
                placeholder="Sin Number"
                editable={isEditing}
                rules={{
                  required: "Sin Number is required",
                }}
              />
              {errors.sin_no && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.sin_no.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="primary"
                placeholder="Primary Trade"
                editable={isEditing}
                rules={{
                  required: "Primary Trade is required",
                }}
              />
              {errors.primary && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.primary.message}
                />
              )}

              <CustomInput
                fontSize={scale(16)}
                control={control}
                name="secondary"
                placeholder="Secondary Trade"
                editable={isEditing}
                rules={{
                  required: "Secondary Trade is required",
                }}
              />
              {errors.secondary && (
                <Error
                  textStyle={{ color: Colors.Black }}
                  text={errors.secondary.message}
                />
              )}
            </View>
            {isEditing ? (
              <CustomButton
                containerRestyle={styles.Button}
                title={"Save"}
                onPress={handleSubmit(onSubmit)}
              />
            ) : null}
          </View>
          <View style={{ height: verticalScale(20) }} />
        </ScrollView>

        <Loader onBackdropPress={() => setLoading(false)} isVisible={loading} />

        <TickModal
          text={msg}
          // onPress={() => setCheck2(false)}
          onBackdropPress={() => setSuccessModal(false)}
          isVisible={successModal}
        />

        {/* <CustomLotti
          isVisible={successModal}
          source={require("../../assets/lotti/success.json")}
          Title={"Profile Updated!"}
        /> */}
      </Background>
    </SafeAreaView>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  ImageView: {
    height: scale(135),
    width: scale(135),
    borderRadius: scale(135),
    backgroundColor: Colors.Black,
    alignSelf: "center",
    overflow: "hidden",
  },
  Icon: {},
  Button: {
    marginVertical: verticalScale(20),
  },

  IconBox: {
    backgroundColor: Colors.White,
    borderRadius: scale(100),
    alignItems: "center",
    position: "absolute",
    bottom: -15,
    borderWidth: scale(3),
    borderColor: Colors.Blue,
    justifyContent: "center",
    height: scale(40),
    width: scale(40),
  },
});
