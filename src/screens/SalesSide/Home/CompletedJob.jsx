import React from "react";
import { useSelector } from "react-redux";
import Empty from "../../../components/common/Cards/Empty";
import BackIcon from "../../../components/common/BackIcon";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import Background from "../../../components/common/Background";
import { SafeAreaView, View, FlatList } from "react-native";
import CompleteTaskCard from "../../../components/common/Cards/CompleteTaskCard";

const CompletedJob = () => {
  const data = useSelector((state) => state.get_id_task);
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon title={"Task Details"} />
        <View style={GlobalStyle.ph20flex}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <Empty marginTop={"60%"} />}
            renderItem={({ item, index }) => (
              <CompleteTaskCard data={item} number={index} />
            )}
          />
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default CompletedJob;
