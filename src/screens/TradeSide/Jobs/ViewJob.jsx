import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../../../components/common/Background";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import JobCard from "../../../components/common/Cards/JobCard";

const ViewJob = ({ navigation }) => {
  sample = [
    { id: 1, description: "Hello", time: "ontime" },
    { id: 2, description: "Hello", time: "ontime" },
    { id: 3, description: "Hello", time: "ontime" },
    { id: 4, description: "Hello", time: "late" },
    { id: 5, description: "Hello", time: "late" },
  ];

  return (
    <Background>
      <BackIcon />
      <View style={GlobalStyle.ph20flex}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {sample.map((item, index) => {
            return (
              <View key={index}>
                <JobCard
                  data={item}
                  gand={"trade"}
                  onPress={() =>
                    item.time == "late" ? navigation.navigate("latejob") : null
                  }
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Background>
  );
};

export default ViewJob;

const styles = StyleSheet.create({});
