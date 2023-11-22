import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { scale, vs } from "react-native-size-matters";
import { Colors } from "../../utils/Color";
import { getGraphData } from "../../redux/actions/UserAction";
import Loader from "./Modals/LoaderModal";

const { width } = Dimensions.get("window");

const Graph = () => {
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState([]);
  const [label, setLabel] = useState([]);
  useEffect(() => {
    getGraphData(setLabel,setValue,setLoad);
  }, []);

  const chartConf = {
    backgroundGradientFrom: Colors.White,
    backgroundGradientTo: Colors.White,
    color: (opacity = 1) => `rgba(53, 56, 143, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: scale(5),
    },
  };
  const data = {
    labels: label,
    datasets: [
      {
        data: value,
      },
    ],
    legend: ["Workload"],
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
