import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Background from "../../components/common/Background";
import CustomInput from "../../components/common/Inputs/CustomInput";
import { useForm } from "react-hook-form";
import { scale, verticalScale } from "react-native-size-matters";
import BackIcon from "../../components/common/BackIcon";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { Font } from "../../utils/font";
import { Colors } from "../../utils/Color";
import CustomButton from "../../components/common/Button/CustomButton";
import Error from "../../components/common/Error";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassApi, LoginApi } from "../../redux/actions/AuthAction";
import IncorrectModal from "../../components/common/Modals/IncorrectModal";

const ForgotPass = ({ navigation }) => {
  const dispatch = useDispatch();

  const { height } = Dimensions.get("window");

  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    dispatch(ForgotPassApi(data, setLoading, navigation, "", setCheck));
  };
  return (
    <Background>
      <View style={{ height: height * 0.2 }} />

      <View style={[GlobalStyle.ph20flex]}>
        <View style={{ justifyContent: "center" }}>
          <View>
            <Text style={GlobalStyle.BlueText}>Forgot Password</Text>
            <Text
              style={{
                fontSize: scale(14),
                fontFamily: Font.AnekBangla700,
                color: Colors.Black,
              }}
            >
              Check your email for otp
            </Text>
          </View>
          <CustomInput
            fontSize={scale(16)}
            MaterialIcons
            size={scale(18)}
            MaterialIcons_Name="email"
            control={control}
            keyboardType="email-address"
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email is not valid",
              },
            }}
            placeholder="Email Address"
          />
          {errors.email && (
            <Error
              textStyle={{ color: Colors.Black }}
              text={errors.email.message}
            />
          )}

          <CustomButton
            loader={loading}
            title={"Search"}
            containerRestyle={{ marginTop: verticalScale(10) }}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              height: verticalScale(250),
              width: scale(204),
            }}
          >
            <Image
              source={require("../../assets/images/logo.png")}
              style={GlobalStyle.Image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <IncorrectModal
        text={"Email not found"}
        onPress={() => setCheck(false)}
        onBackdropPress={() => setCheck(false)}
        isVisible={check}
      />
    </Background>
  );
};
const styles = StyleSheet.create({
  Forgot: {
    alignSelf: "flex-end",
  },
  ForgotText: {
    fontFamily: Font.AnekBangla400,
    fontSize: scale(17),
    color: Colors.Black,
  },
});

export default ForgotPass;
