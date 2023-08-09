import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../Inputs/CustomInput";
import Error from "../Error";
import CustomButton from "../Button/CustomButton";
import { useForm } from "react-hook-form";
import { scale } from "react-native-size-matters";

const JobForm = () => {
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
          required: 'First Name is required',
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
          required: 'First Name is required',
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
        rules={{
          required: "Phone Number is required",
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: "Phone Number is not valid",
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
          required: 'Task Address is required',
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
          required: 'City is required',
        }}
        maxLength={20}
        placeholder={"City"}
      />
      {errors.city && <Error text={errors.city.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        keyboardType = {'numeric'}
        name="zipcode"
        rules={{
          required: 'ZipCode is required',
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
          required: 'State is required',
        }}
        maxLength={5}
        placeholder={"State"}
      />
      {errors.state && <Error text={errors.state.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="images"
        rules={{
          required: 'Please add image',
        }}
        maxLength={20}
        placeholder={"Multiple Images"}
      />
      {errors.images && <Error text={errors.images.message} />}

      
      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="videos"
        rules={{
          required: 'Please add videos',
        }}
        maxLength={20}
        placeholder={"Multiple Videos"}
      />
      {errors.videos && <Error text={errors.videos.message} />}

      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="videos"
        rules={{
          required: 'Please add videos',
        }}
        maxLength={20}
        placeholder={"Multiple Videos"}
      />
      {errors.videos && <Error text={errors.videos.message} />} 


      
      <CustomInput
        fontSize={scale(16)}
        control={control}
        name="scope"
        rules={{
          required: 'Please add videos',
        }}
        maxLength={20}
        placeholder={"Scope of the work"}
      />
      {errors.scope && <Error text={errors.scope.message} />} 

      <CustomInput
        fontSize={scale(16)}
        control={control}
        keyboardType={'numeric'}
        name="budget"
        rules={{
          required: 'Please add an amount',
        }}
        maxLength={20}
        placeholder={"Budget of the work"}
      />
      {errors.budget && <Error text={errors.budget.message} />} 


      
      <CustomInput
        fontSize={scale(16)}
        control={control}
        keyboardType={'numeric'}
        name="finaldate"
        rules={{
          required: 'Please select a date',
        }}
        maxLength={20}
        placeholder={"Date of finalization"}
      />
      {errors.finaldate && <Error text={errors.finaldate.message} />} 


      <CustomButton title = {'Add'} />









    </View>
  );
};

export default JobForm;

const styles = StyleSheet.create({});
