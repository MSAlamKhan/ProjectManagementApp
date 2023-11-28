import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { GlobalStyle } from "../../../../constant/GlobalStyle";
import Background from "../../../../components/common/Background";
import BackIcon from "../../../../components/common/BackIcon";
import { styles } from "./style";
import moment from "moment";

const SaleFullDetail = ({ route }) => {
  const { item } = route.params;
  console.log(item.is_reason);
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <View style={styles.Main}>
         

        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>state:&nbsp;</Text>
        <Text style={styles.DescText}>
          {item?.state}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>zipcode:&nbsp;</Text>
        <Text style={styles.DescText}>
          {item?.zipcode}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>payment:&nbsp;</Text>
        <Text style={styles.DescText}>
          {item?.payment}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>state:&nbsp;</Text>
        <Text style={styles.DescText}>
          {item?.state}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>task_address:&nbsp;</Text>
        <Text style={styles.DescText}>
          {item?.task_address}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>budget:&nbsp;</Text>
        <Text style={styles.DescText}>
          ${item?.work_budget}.00
        </Text>
      </View>


          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Created Date:&nbsp;</Text>
              <Text style={[styles.DescText]}>
                {moment(item?.updated_at).format("MMM Do YY")}
              </Text>
            </View>
          </View>
          
        </View>
      </Background>
    </SafeAreaView>
  );
};



export default SaleFullDetail