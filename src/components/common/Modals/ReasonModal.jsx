import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useForm } from "react-hook-form";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";
import CustomInput from "../Inputs/CustomInput";
import CustomButton from "../Button/CustomButton";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import Error from "../Error";

const ReasonModal = ({
  isVisible,
  onBackdropPress,
  restyleMainModal,
  ContainerRestyle,
  heading,
  question,
  onPressSubmit,
  children,
}) => {
  return (
    <View>
      <ReactNativeModal
        onBackdropPress={onBackdropPress}
        backdropOpacity={0}
        isVisible={isVisible}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        style={[GlobalStyle.MainModal, restyleMainModal]}
      >
        <View style={[styles.ModalContainer, ContainerRestyle]}>
          <ScrollView>
            <View style={styles.Heading}>
              <Text style={[styles.Text, { fontSize: scale(18) }]}>
                {heading}
              </Text>
            </View>

            <View
              style={[
                GlobalStyle.ModalLine,
                {
                  width: "100%",
                  height: verticalScale(1),
                  backgroundColor: Colors.White,
                },
              ]}
            />

            <View style={styles.ApplicationContent}>
              <Text style={styles.Text}>{question}</Text>
              {children}
            </View>

            <View style={styles.ButtonView}>
              <CustomButton
                title={"Submit"}
                containerRestyle={{
                  backgroundColor: Colors.Blue,
                  borderRadius: scale(14),
                }}
                // onPress={handleSubmit()}
                onPress={onPressSubmit}
              />
            </View>
          </ScrollView>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default ReasonModal;

const styles = StyleSheet.create({
  MainModal: {
    justifyContent: "center",
    margin: 0,
    backgroundColor: Colors.Main,
    paddingHorizontal: moderateScale(20),
  },
  ModalContainer: {
    width: "85%",
    borderRadius: scale(14),
    backgroundColor: Colors.Main,
    alignSelf: "center",
    height: "75%",
    paddingTop: verticalScale(25),
  },

  Heading: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    justifyContent: "space-between",
    alignItems: "center",
  },

  Text: {
    fontFamily: Font.AnekBangla600,
    fontSize: scale(16),
    color: Colors.White,
  },

  ApplicationContent: {
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(15),
  },

  ButtonView: {
    paddingHorizontal: moderateScale(20),
    marginTop: verticalScale(20),
  },
});
