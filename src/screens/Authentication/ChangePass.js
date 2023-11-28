import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
    ToastAndroid
} from "react-native";
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
import { IS_SIGN_IN } from "../../redux/reducer";
import { ChangePassApi, LoginApi } from "../../redux/actions/AuthAction";
import IncorrectModal from "../../components/common/Modals/IncorrectModal";

const ChangePass = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { userData } = route.params

    const { height } = Dimensions.get("window");

    const [isVisible, setVisible] = useState(true);
    const [isVisible2, setVisible2] = useState(true);
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = (data) => {
        if (data.new_pass == data.confirm_password) {
            // alert(data)
            ChangePassApi(data, userData, setLoading, navigation, ToastAndroid)
        } else {
            setCheck(true)
        }
        // console.log("data", data);
        // dispatch(LoginApi(data, setLoading));
        // dispatch({ type: IS_SIGN_IN, payload: data.email });
        // console.log("signIn", signIn);
    };
    return (
        <Background>
            <View style={{ height: height * 0.2 }} />

            <View style={[GlobalStyle.ph20flex]}>
                <View style={{ justifyContent: "center" }}>
                    <View>
                        <Text style={GlobalStyle.BlueText}>Change Password</Text>
                        {/* <Text style={GlobalStyle.BlackText}>Trax Jobsite</Text> */}
                    </View>
                    <CustomInput
                        password
                        fontSize={scale(16)}
                        Feather
                        size={scale(18)}
                        Feather_Name={"lock"}
                        control={control}
                        keyboardType="default"
                        name="new_pass"
                        rules={{
                            required: "New Password is required",
                            minLength: {
                                value: 8,
                                message: "New Password too short (minimum length is 8)",
                            },
                            maxLength: {
                                value: 16,
                                message: "New Password too long (maximum length is 16)",
                            },
                        }}
                        placeholder="New Password"
                        secureTextEntry={isVisible2 ? true : false}
                        isVisible={isVisible2}
                        onPassPress={() => setVisible2(!isVisible2)}
                    />
                    {errors.new_pass && (
                        <Error
                            textStyle={{ color: Colors.Black }}
                            text={errors.new_pass.message}
                        />
                    )}

                    <CustomInput
                        password
                        fontSize={scale(16)}
                        Feather
                        size={scale(18)}
                        secureTextEntry={isVisible ? true : false}
                        isVisible={isVisible}
                        onPassPress={() => setVisible(!isVisible)}
                        Feather_Name={"lock"}
                        control={control}
                        maxLength={20}
                        name="confirm_password"
                        rules={{
                            required: "Confirm Password is required",
                            minLength: {
                                value: 8,
                                message: "Confirm Password too short (minimum length is 8)",
                            },
                            maxLength: {
                                value: 16,
                                message: "Confirm Password too long (maximum length is 16)",
                            },
                        }}
                        placeholder="Confirm Password"
                    />
                    {errors.confirm_password && (
                        <Error
                            textStyle={{ color: Colors.Black }}
                            text={errors.confirm_password.message}
                        />
                    )}



                    <CustomButton
                        loader={loading}
                        title={"Confirm"}
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
                text={"Password do not match"}
                onPress={() => setCheck(false)}
                onBackdropPress={() => setCheck(false)}
                isVisible={check}
            />
        </Background>
    )
}

export default ChangePass

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