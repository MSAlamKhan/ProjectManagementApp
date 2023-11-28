import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { GlobalStyle } from "../../../../constant/GlobalStyle";
import Background from "../../../../components/common/Background";
import BackIcon from "../../../../components/common/BackIcon";
import { styles } from "./style";
import moment from "moment";

const TradeFullDetail = ({ route }) => {
  const { item } = route.params;
  console.log(item.is_reason);
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <View style={styles.Main}>
         

          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Status:&nbsp;</Text>
              <Text style={[styles.DescText]}>{item?.task_status}</Text>
            </View>
          </View>
          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Created Date:&nbsp;</Text>
              <Text style={[styles.DescText]}>
                {moment(item?.updated_at).format("MMM Do YY")}
              </Text>
            </View>
          </View>
          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Complete Date:&nbsp;</Text>
              <Text style={[styles.DescText]}>
                {moment(item?.complete_date).format("MMM Do YY")}
              </Text>
            </View>
          </View>

          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Payment:&nbsp;</Text>
              <Text style={[styles.DescText]}>{item?.payment}</Text>
            </View>
          </View>
          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.Heading]}>Detail:&nbsp;</Text>
              <Text style={[styles.DescText, styles.w90]}>
                {item?.task_description}
              </Text>
            </View>
          </View>

          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.Heading]}>Tools:&nbsp;</Text>
              <Text style={[styles.DescText, styles.w90]}>
                {item?.tool_required}
              </Text>
            </View>
          </View>
          <View style={GlobalStyle.RowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.Heading]}>Complete Status:&nbsp;</Text>
              <Text style={[styles.DescText]}>{item?.complete_status}</Text>
            </View>
          </View>
          {item.is_reason == "true" ? (
            <>
              <View style={GlobalStyle.RowBetween}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={[styles.Heading]}>Reason:&nbsp;</Text>
                  <Text style={[styles.DescText, styles.w90]}>
                    {item?.reason?.reason}
                  </Text>
                </View>
              </View>
              <View style={GlobalStyle.RowBetween}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={[styles.Heading]}>Late Time:&nbsp;</Text>
                  <Text style={[styles.DescText, styles.w90]}>
                    {moment(item?.reason?.created_at).format("MMM Do YY")}
                  </Text>
                </View>
              </View>
            </>
          ) : null}
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default TradeFullDetail;
