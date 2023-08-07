import React, { forwardRef, useState, TouchableOpacity } from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";

const CustomInput = forwardRef((props, ref) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue || "",
    name: props.name,
    rules: props.rules,
  });
  return (
    <>
      {props.uppertrue ? (
        <View
          style={[{ marginTop: verticalScale(25) }, props.RestyleUpperView]}
        >
          <Text style={[styles.UpperText, props.restyleUpperText]}>
            {props.upperText}
          </Text>
        </View>
      ) : null}

      <View style={[styles.smallbox, props.boxStyle]}>
        {props.FontAwesome ? (
          <FontAwesome
            name={props.FontAwesome_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.IconColor}
          />
        ) : null}

        {props.IonIcons ? (
          <IonIcons
            name={props.IonIcons_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.IconColor}
          />
        ) : null}
        {props.MaterialIcons ? (
          <MaterialIcons
            name={props.MaterialIcons_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.IconColor}
          />
        ) : null}
        {props.Feather ? (
          <Feather
            name={props.Feather_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.IconColor}
          />
        ) : null}
        {props.Fontisto ? (
          <Fontisto
            name={props.Fontisto_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.IconColor}
          />
        ) : null}
        <TextInput
          onFocus={props.onFocus}
          textContentType={props.textContentType}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.placeholderTextColor}
          style={[styles.InputStyles, props.restyle]}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          textAlignVertical={props.textAlignVertical}
          pattern={props.pattern}
          label={props.label}
          placeholderStyle={props.placeholderStyle}
          fontSize={props.fontSize}
          maxLength={props.maxLength}
        />
        {props.search ? (
          <Feather
            name={"search"}
            onPress={props.onPressLocation}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.SearchBar}
            style={{ alignSelf: "center", marginRight: moderateScale(10) }}
          />
        ) : null}
        {props.send ? (
          <Feather
            name={"send"}
            size={props.size}
            color={"#18516E"}
            style={{ alignSelf: "center", marginRight: moderateScale(10) }}
          />
        ) : null}
        {props.wordcount == true ? (
          <View style={styles.CountContainer}>
            <Text style={styles.CountText}>0/300 Characters</Text>
          </View>
        ) : null}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  UpperText: {
    fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
  },
  InputStyles: {
    flex: 1,
    // height: '100%',
    color: Colors.Black,
    fontFamily: Font.AnekBangla400,
  },
  smallbox: {
    // alignSelf: 'center',
    // alignItems: 'center',
    // // justifyContent: 'space-between',
    // flexDirection: 'row',
    // marginTop: verticalScale(20),
    // width: '100%',
    // paddingHorizontal: moderateScale(20),
    // height: verticalScale(50),
    // backgroundColor: Colors.White,
    // borderWidth: scale(1),
    // borderColor: Colors.InputContainer,
    // borderRadius: scale(25),

    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
export default CustomInput;
