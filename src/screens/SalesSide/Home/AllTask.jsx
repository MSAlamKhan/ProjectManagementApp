import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStyle } from "../../../constant/GlobalStyle";
import { SafeAreaView,  FlatList, View } from "react-native";

import Empty from "../../../components/common/Cards/Empty";
import BackIcon from "../../../components/common/BackIcon";
import Background from "../../../components/common/Background";
import TaskCard from "../../../components/common/Cards/TaskCard";
import { show_id_task } from "../../../redux/actions/UserAction";

const AllTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.get_lead_task);
  const onSubmit = (item) => {
    dispatch(show_id_task(item.id, navigation));
  };
  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <View style={GlobalStyle.ph20flex}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <Empty marginTop={"60%"} />}
            renderItem={({ item, index }) => (
              <TaskCard
                data={item}
                number={index}
                onPress={() => onSubmit(item)}
              />
            )}
          />
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default AllTask;
