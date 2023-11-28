import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { GlobalStyle } from "../../../../constant/GlobalStyle";
import Empty from "../../../../components/common/Cards/Empty";
import SaleFullCard from "./SaleFullCard";
import BackIcon from "../../../../components/common/BackIcon";
import Background from "../../../../components/common/Background";
import Loader from "../../../../components/common/Modals/LoaderModal";
import { getSaleDBTaskData } from "../../../../redux/actions/UserAction";

const Index = ({route,navigation}) => {
    const { type } = route.params;
    const [data, setData] = useState([]);
    console.log('type', type)
    const [load, setLoad] = useState(false);
  
    useEffect(() => {
      getSaleDBTaskData(type, setData, setLoad);
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
            <SaleFullCard
              data={item}
              onPress={() => navigation.navigate("saleFullDetail", { item })}
            />
          )}
        />
      </Background>
      <Loader isVisible={load} />
    </SafeAreaView>
  )
}

export default Index