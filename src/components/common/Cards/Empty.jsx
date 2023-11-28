import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Empty = ({marginTop}) => {
  return (
    <View style={[styles.container,{marginTop:marginTop? marginTop : "10%"}]}>
      <View style={styles.ImageBox}>
        <Image
          resizeMode="contain"
          style={styles.Image}
          source={require("../../../assets/images/empty.png")}
        />
      </View>
      <Text style={styles.text}>Nothing to Show</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  ImageBox: {
    width: scale(200),
    height: scale(200),
    marginVertical: verticalScale(10),
  },
  text: {
    fontSize: scale(22),
  },
});
export default Empty;
