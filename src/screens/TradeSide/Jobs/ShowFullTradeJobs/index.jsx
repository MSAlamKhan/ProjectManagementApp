import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { GlobalStyle } from "../../../../constant/GlobalStyle";
import Empty from "../../../../components/common/Cards/Empty";
import TradeFullCard from "./TradeFullCard";
import BackIcon from "../../../../components/common/BackIcon";
import Background from "../../../../components/common/Background";
import Loader from "../../../../components/common/Modals/LoaderModal";
import { getTradeDBTaskData } from "../../../../redux/actions/UserAction";

const Index = ({ navigation, route }) => {
  const { type } = route.params;
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getTradeDBTaskData(type, setData, setLoad);
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => <Empty marginTop={"30%"} />}
          renderItem={({ item }) => (
            <TradeFullCard
              data={item}
              onPress={() => navigation.navigate("tradeFullDetail", { item })}
            />
          )}
        />
      </Background>
      <Loader isVisible={load} />
    </SafeAreaView>
  );
};

export default Index;
