import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../../components/common/Background";
import CustomInput from "../../components/common/Inputs/CustomInput";
import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <Background>
      <Text style={{ color: "black", fontSize: 20 }}>adada mateeeeeen</Text>
      <CustomInput
        // fontSize={scale(16)}
        MaterialIcons={true}
        restyle={{ paddingHorizontal:10 }}
        MaterialIcons_Name="email"
        // size={scale(20)}
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
    </Background>
  );
};

export default Signin;

const styles = StyleSheet.create({});
