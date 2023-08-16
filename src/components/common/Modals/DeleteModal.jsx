import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";

const DeleteModal = (props) => {
  return (
    <View>
      <ReactNativeModal
        onBackdropPress={props.onBackdropPress}
        // avoidKeyboard ={true}
        scrollOffset={1}
        backdropOpacity={0}
        isVisible={props.isVisible}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        style={[GlobalStyle.MainModal, props.restyleMainModal]}
      >
        <View style={[styles.ModalContainer, props.ContainerRestyle]}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name={"delete"}
              size={scale(24)}
              color={Colors.Red}
            />
            <Text style={styles.Text}>
              {props.text
                ? props.text
                : "Are you sure you want to delete this job?"}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity onPress={props.onDelete} style={styles.WhiteBox}>
              <Text style={[styles.Text, { color: Colors.Red }]}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onCancel} style={styles.WhiteBox}>
              <Text style={[styles.Text, { color: Colors.Green }]}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  MainModal: {
    justifyContent: "center",
    margin: 0,
    // backgroundColor: Colors.ThemeBlue,
    paddingHorizontal: moderateScale(20),
  },
  ModalContainer: {
    width: "70%",
    borderRadius: scale(6),
    backgroundColor: Colors.Main,
    paddingVertical: verticalScale(15),
    alignSelf: "center",
    paddingHorizontal: moderateScale(10),
  },
  Text: {
    fontFamily: Font.AnekBangla600,
    fontSize: scale(16),
    color: Colors.Black,
    marginHorizontal: verticalScale(10),
  },
  WhiteBox: {
    backgroundColor: Colors.White,
    borderRadius: scale(6),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
});
