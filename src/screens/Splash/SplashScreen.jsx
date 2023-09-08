import { StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import { Colors } from "../../utils/Color";
import { GlobalStyle } from "../../constant/GlobalStyle";

const SplashScreen = () => {
  return (
    <View>
      <StatusBar translucent backgroundColor={Colors.Non} />
      <Image
        style={GlobalStyle.Image}
        source={require("../../assets/images/splash_image.png")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
