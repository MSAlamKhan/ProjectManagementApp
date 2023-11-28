import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import CustomInput from "../Inputs/CustomInput";
import Error from "../Error";
import CustomButton from "../Button/CustomButton";
import { useForm } from "react-hook-form";
import { ms, scale, verticalScale } from "react-native-size-matters";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { Colors } from "../../../utils/Color";
import { SELECTEDDATE } from "../../../redux/reducer";
import { useDispatch } from "react-redux";

const JobForm = ({ onSubmit, onCameraPress, onVideoPress, type }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [isDateSelected, setDateSelected] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formateDate = moment(date).format("yyyy-MM-DD");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <View>
      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="fname"
        rules={{
          required: "First Name is required",
        }}
        maxLength={20}
        placeholder={"First Name"}
      />

      {errors.fname && <Error text={errors.fname.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="lname"
        rules={{
          required: "First Name is required",
        }}
        maxLength={20}
        placeholder={"Last Name"}
      />
      {errors.lname && <Error text={errors.lname.message} />}

      <CustomInput
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
      {errors.email && <Error text={errors.email.message} />}

      <CustomInput
        control={control}
        name="phone"
        keyboardType={"numeric"}
        rules={{
          required: "Phone number is required",
          message: "Please enter your phone number",
          maxLength: {
            value: 15,
            message: "Please enter a valid phone number",
          },
        }}
        placeholder="Phone Number"
      />
      {errors.phone && <Error text={errors.phone.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="task_address"
        rules={{
          required: "Task Address is required",
        }}
        maxLength={20}
        placeholder={"Task Address"}
      />
      {errors.task_address && <Error text={errors.task_address.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="city"
        rules={{
          required: "City is required",
        }}
        maxLength={20}
        placeholder={"City"}
      />
      {errors.city && <Error text={errors.city.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        keyboardType={"numeric"}
        name="zipcode"
        rules={{
          required: "ZipCode is required",
        }}
        maxLength={5}
        placeholder={"ZipCode"}
      />
      {errors.zipcode && <Error text={errors.zipcode.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="state"
        rules={{
          required: "State is required",
        }}
        maxLength={5}
        placeholder={"State"}
      />
      {errors.state && <Error text={errors.state.message} />}

      <CustomInput
        camera
        fontSize={scale(16)}
        onCameraPress={onCameraPress}
        size={scale(18)}
        control={control}
        name="images"
        editable={false}
        maxLength={20}
        placeholder={"Multiple Images"}
        rules={{
          required: false,
        }}
      />

      <CustomInput
        video
        fontSize={scale(16)}
        control={control}
        editable={false}
        size={scale(18)}
        onVideoPress={onVideoPress}
        name="videos"
        rules={{
          required: false,
        }}
        maxLength={20}
        placeholder={"Multiple Videos"}
      />

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="scope"
        rules={{
          required: "Please add scope",
        }}
        placeholder={"Scope of the work"}
      />
      {errors.scope && <Error text={errors.scope.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        keyboardType={"numeric"}
        name="budget"
        rules={{
          required: "Please add an amount",
        }}
        maxLength={10}
        placeholder={"Budget of the work"}
      />
      {errors.budget && <Error text={errors.budget.message} />}

      <CustomButton
        containerRestyle={styles.button}
        textStyle={{ color: Colors.Black }}
        title={isDateSelected ? formateDate : "Date of finalization"}
        onPress={() => setDatePickerVisibility(true)}
      />

      <DateTimePickerModal
        mode="date"
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        onConfirm={(date) => {
          setDate(date);
          hideDatePicker();
          setDateSelected(true);
          dispatch({ type: SELECTEDDATE, payload: formateDate });
        }}
      />

      <CustomButton
        containerRestyle={{ marginVertical: verticalScale(10) }}
        onPress={handleSubmit(onSubmit)}
        title={type == "edit" ? "Save" : "Add"}
      />
    </View>
  );
};

export default JobForm;

const styles = StyleSheet.create({
  button: {
    marginVertical: verticalScale(10),
    backgroundColor: Colors.White,
    height: verticalScale(65),
    justifyContent: "flex-start",
    paddingHorizontal: ms(20),
  },
});
