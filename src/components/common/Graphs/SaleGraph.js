import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { scale, vs } from "react-native-size-matters";
import Loader from "../Modals/LoaderModal";
import { Colors } from "../../../utils/Color";
import {  getSaleGraphData } from "../../../redux/actions/UserAction";

const { width } = Dimensions.get("window");

const SaleGraph = ({ type, color,select,legend }) => {
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState([]);
  useEffect(() => {
    getSaleGraphData(type, setValue, setLoad,select);
  }, [type,select,legend,color]);

 
  const chartConf = {
    decimalPlaces: 0,
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
    yAxisLabel: "", // Set Y-axis label to an empty string
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

export default SaleGraph;
