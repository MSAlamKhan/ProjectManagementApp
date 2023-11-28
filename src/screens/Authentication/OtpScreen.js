import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { ForgotPassApi, LoginApi } from "../../redux/actions/AuthAction";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import IncorrectModal from "../../components/common/Modals/IncorrectModal";

const OtpScreen = ({ navigation, route }) => {
    const { data } = route.params
    const dispatch = useDispatch();
    const otp = useSelector(state => state.otp);

    const { height } = Dimensions.get("window");

    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();
    const [time, setTime] = useState(30);

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
    }, [time]);

    const CELL_COUNT = 4;

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });



    const onSubmit = () => {
        if (value) {
            if (value == otp) {
                navigation.navigate('changepass', {
                    userData: data
                })
            } else {
                setCheck2(true)
            }
        } else {
            alert('Enter your OTP')
        }
    };

    const resendOtp = () => {
        setTime(30);
        dispatch(ForgotPassApi(data, setLoading, navigation, 'resend', setCheck));
    };

    return (
        <Background>
            <View style={{ height: height * 0.2 }} />

            <View style={[GlobalStyle.ph20flex]}>
                <View style={{ justifyContent: "center" }}>
                    <View>
                        <Text style={GlobalStyle.BlueText}>OTP</Text>
                        <Text style={{
                            fontSize: scale(14),
                            fontFamily: Font.AnekBangla700,
                            color: Colors.Black,
                        }}>
                            {`We've`} just send you 4 digits code to your email {`\n`}{' '}
                            {otp}
                        </Text>
                    </View>

                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={[
                            styles.codeFieldRoot,
                            {
                                borderRadius: scale(16),
                            },
                        ]}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                            key={index}
                                style={styles.OTPBox}>
                                <Text
                                    
                                    style={[
                                        { color: Colors.Black },
                                        styles.cell
                                    ]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        )}
                    />


                    <CustomButton
                        loader={loading}
                        title={"Submit"}
                        containerRestyle={{ marginTop: verticalScale(10) }}
                        onPress={handleSubmit(onSubmit)}
                    />
                    {
                        time == 0 ?
                            <TouchableOpacity
                                onPress={() => resendOtp()}
                                style={styles.Forgot}
                            >
                                <Text style={styles.ForgotText}>Press to Resend Your OPT</Text>
                            </TouchableOpacity>

                            :
                            <View
                                style={styles.Forgot}
                            >
                                <Text style={[styles.ForgotText, {
                                    color: 'black'
                                }]}>You can Reset Your OTP in {time}</Text>
                            </View>
                    }
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
                text={"Incorrect OTP!"}
                onPress={() => setCheck2(false)}
                onBackdropPress={() => setCheck2(false)}
                isVisible={check2}
            />
        </Background>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    Forgot: {
        alignSelf: "flex-end",

    },
    ForgotText: {
        fontFamily: Font.AnekBangla400,
        fontSize: scale(14),
        color: Colors.Blue,
    },
    codeFieldRoot: {
        marginVertical: scale(10),
        alignItems: 'center',
    },
    cell: {
       
        fontSize: scale(20),
        color: Colors.Black,
        fontFamily: Font.Manrope400,
    },
    OTPBox:{
        width: scale(55),
        height: scale(50),
        alignItems:'center',
        borderRadius: scale(10),
        justifyContent:'center',
        backgroundColor: Colors.White,
    }
    ,

});