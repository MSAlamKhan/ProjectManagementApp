import {
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { Colors } from "../../utils/Color";

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.Main }}>
      <StatusBar translucent backgroundColor={Colors.Non} />
      <ImageBackground
        source={require("../../assets/images/Lee-background.png")}
        style={GlobalStyle.Image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;

