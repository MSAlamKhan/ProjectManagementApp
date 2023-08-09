import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
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
import { IS_SIGN_IN } from "../../redux/reducer/Holder";

const Signin = () => {
  const windowHeight = Dimensions.get("window").height;
  const signIn = useSelector((state) => state.isSignin);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch({ type: IS_SIGN_IN, payload: data.email });
    console.log("signIn", signIn);
  };
  return (
    <Background>
      <BackIcon />

      <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.ph20flex}>
          <View style={{ height: windowHeight * 0.2 }} />
          <View style={{ justifyContent: "center" }}>
            <View>
              <Text style={GlobalStyle.BlueText}>Welcome,</Text>
              <Text style={GlobalStyle.BlackText}>Trax Jobsite</Text>
            </View>
            <CustomInput
              fontSize={scale(16)}
              MaterialIcons={true}
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

            <CustomInput
              password={true}
              fontSize={scale(16)}
              Feather={true}
              size={scale(18)}
              Feather_Name={"lock"}
              control={control}
              maxLength={20}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "*Password too short (minimum length is 8)",
                },
                maxLength: {
                  value: 16,
                  message: "*Password too long (maximum length is 16)",
                },
              }}
              placeholder="Password"
            />
            {errors.password && (
              <Error
                textStyle={{ color: Colors.Black }}
                text={errors.password.message}
              />
            )}

            <TouchableOpacity style={styles.Forgot}>
              <Text style={styles.ForgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              title={"Sign in"}
              containerRestyle={{ marginTop: verticalScale(10) }}
              onPress={handleSubmit(onSubmit)}
            />
          </View>

          <View
            style={{
              alignItems: "flex-end"}}
          >
            <View
              style={{
                height: verticalScale(250),
                width: scale(204),
              }}
            >
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

export default Signin;

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
