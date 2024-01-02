import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { scale, vs } from "react-native-size-matters";
import Loader from "../Modals/LoaderModal";
import { Colors } from "../../../utils/Color";
import { getGraphData } from "../../../redux/actions/UserAction";

const { width } = Dimensions.get("window");

const Graph = ({ type, color,legend }) => {
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState([]);

  useEffect(() => {
    getGraphData(type, setValue, setLoad);
  }, [type]);

 
  const chartConf = {
    decimalPlaces: 1, // Ensures no decimal places are shown
     backgroundGradientFrom: Colors.White,
     backgroundGradientTo: Colors.White,
     color: () => color,
     strokeWidth: 2,
     barPercentage: 0.5,
     useShadowColorFromDataset: false,
     labelColor: () => Colors.Black,
     propsForDots: {
       r: scale(5),
     },
     yAxisSuffix:{
       display:false
     },
   };

  const data = {
    labels: value?.label,
    datasets: [
      {
        data: value?.value,
      },
    ],
    legend: [legend],
  };

  return load ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={width}
        height={vs(220)}
        withShadow={false}
        withHorizontalLabels
        chartConfig={chartConf}
        withVerticalLines={false}
        withHorizontalLines={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(10),
    overflow: "hidden",
    backgroundColor: Colors.White,
  },
});

export default Graph;
