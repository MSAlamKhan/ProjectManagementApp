import React from "react";
import { styles } from "./style";
import { View, Text, Pressable } from "react-native";
import { GlobalStyle } from "../../../../constant/GlobalStyle";
import moment from "moment";
import { Colors } from "../../../../utils/Color";

const SaleFullCard = ({ data, onPress }) => {
  return (
    <Pressable
      android_ripple={{
        color: Colors.Main,
      }}
      onPress={onPress}
      style={[styles.Main]}
    >
      <View style={GlobalStyle.RowBetween}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.Heading]}>Name:&nbsp;</Text>
          <Text style={styles.DescText}>
            {data?.firstname} {data?.lastname}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>email:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.email}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Phone Number:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.phone_number}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>address:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.task_address}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>city:&nbsp;</Text>
        <Text style={styles.DescText}>{data?.city}</Text>
      </View>
    </Pressable>
  );
};

export default SaleFullCard;
