import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../../utils/Color";
import { Font } from "../../utils/font";
import { SwipeListView } from "react-native-swipe-list-view";
import JobCard from "./Cards/JobCard";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const MenuSelectComponent = ({
  menuFirst,
  menuSecond,
  menuThird,
  firstData,
  secondData,
  thirdData,
  ...props
}) => {
  const [menu, setMenu] = useState("first");

  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Bar}>
        <TouchableOpacity
          onPress={() => setMenu("first")}
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === "first" ? Colors.Main : Colors.IconColor,
            },
          ]}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "first" ? Colors.White : Colors.TextDarkGrey,
              },
            ]}
          >
            {menuFirst}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === "second" ? Colors.Main : Colors.IconColor,
            },
          ]}
          onPress={() => setMenu("second")}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "second" ? Colors.White : Colors.TextDarkGrey,
              },
            ]}
          >
            {menuSecond}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === "third" ? Colors.Main : Colors.IconColor,
            },
          ]}
          onPress={() => setMenu("third")}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "third" ? Colors.White : Colors.TextDarkGrey,
              },
            ]}
          >
            {menuThird}
          </Text>
        </TouchableOpacity>
      </View>
      <SwipeListView
        data={
          menu === "first"
            ? firstData
            : menu == "second"
            ? secondData
            : thirdData
        }
        // keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <JobCard
              onPress={() =>
                navigation.navigate("alltask", { time: item.time })
              }
              menu={menu}
              data={item}
            />
          );
        }}
        renderHiddenItem={() => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              onPress={() => navigation.navigate("addlead", { type: "edit" })}
              style={styles.IconBox}
            >
              <Feather name="edit" size={scale(30)} color={Colors.Main} />
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => setReasonModal(true)}
              style={styles.IconBox}
            >
              <AntDesign name="delete" size={scale(30)} color={Colors.Red} />
            </TouchableOpacity>
          </View>
        )}
        // swipeDirection={}
        disableRightSwipe={menu == "first" ? false : true}
        disableLeftSwipe={menu == "first" ? false : true}
        rightOpenValue={scale(-80)}
        leftOpenValue={scale(80)}
      />
    </View>
  );
};

export default MenuSelectComponent;

const styles = StyleSheet.create({
  Bar: {
    flexDirection: "row",
    borderRadius: scale(6),
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  MenuBox: {
    justifyContent: "center",
    height: verticalScale(35),
    alignItems: "center",
    // width: "50%",
    borderRadius: scale(6),
    paddingHorizontal: moderateScale(10),
  },

  heading: {
    fontSize: scale(14),
    fontFamily: Font.AnekBangla600,
  },
  rowBack: {
    // alignItems: 'flex-end',
    justifyContent: "space-between",
    // marginRight: '7%',
    flexDirection: "row",
  },
  IconBox: {
    width: scale(80),
    height: scale(80),
    justifyContent: "center",
    alignItems: "center",
  },
});
