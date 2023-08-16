import React, { forwardRef, useState } from "react";
import { useController } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../../utils/Color";
import { Font } from "../../../utils/font";

const CustomInput = forwardRef((props, ref) => {
  // const [isVisible, setVisible] = useState(true);
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
          editable = {props.editable}
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
          <TouchableOpacity>
            <Feather
              name={"send"}
              size={props.size}
              color={"#18516E"}
              style={{ alignSelf: "center", marginRight: moderateScale(10) }}
            />
          </TouchableOpacity>
        ) : null}

        {props.camera ? (
          <TouchableOpacity onPress={props.onCameraPress}>
            <MaterialCommunityIcons
              name={"camera-plus-outline"}
              size={props.size}
              color={Colors.IconColor}
              style={{ alignSelf: "center", marginRight: moderateScale(10) }}
            />
          </TouchableOpacity>
        ) : null}

        {props.video ? (
          <TouchableOpacity onPress={props.onVideoPress}>
            <MaterialCommunityIcons
              name={"movie-plus-outline"}
              size={props.size}
              color={Colors.IconColor}
              style={{ alignSelf: "center", marginRight: moderateScale(10) }}
            />
          </TouchableOpacity>
        ) : null}
        {props.password == true ? (
          <MaterialCommunityIcons
            name={props.isVisible ? "eye-off-outline" : "eye-outline"}
            size={scale(18)}
            color={Colors.IconColor}
            onPress={props.onPassPress}
            // style={{
            //   alignSelf: 'center',
            //   marginLeft: '5%',
            // }}
          />
        ) : null}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  UpperText: {
    fontFamily: Font.AnekBangla500,
    color: Colors.Black,
    fontSize: scale(16),
  },
  InputStyles: {
    flex: 1,
    color: Colors.White,
    fontFamily: Font.AnekBangla500,
    top: 0.5,
    paddingHorizontal: moderateScale(10),
  },
  smallbox: {
    backgroundColor: Colors.Black,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: scale(8),
    // paddingVertical: 8,
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(10),
  },
});
export default CustomInput;
