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
import DeleteModal from "./Modals/DeleteModal";

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

  const handleNavigate = (item) =>{
    console.log('menu', menu)
    if (menu === 'third') {
      navigation.navigate('alltask',{type:'completed', time: item.time })
    } else {

      navigation.navigate('alltask',{time: item.time})
      
    }
  }

  const [deleteModal, setDeleteModal] = useState(false)
  return (
    <View>
      <View style={styles.Bar}>
        <TouchableOpacity
          onPress={() => setMenu("first")}
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === "first" ? Colors.Blue : Colors.White,
            },
          ]}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "first" ? Colors.White : Colors.Black,
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
                menu === "second" ? Colors.Blue : Colors.White,
            },
          ]}
          onPress={() => setMenu("second")}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "second" ? Colors.White : Colors.Black,
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
                menu === "third" ? Colors.Blue : Colors.White,
            },
          ]}
          onPress={() => setMenu("third")}
        >
          <Text
            style={[
              styles.heading,
              {
                color: menu === "third" ? Colors.White : Colors.Black,
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
              onPress={()=>handleNavigate(item)}
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
              onPress={() => setDeleteModal(true)}
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

      <DeleteModal
        isVisible={deleteModal}
        onBackdropPress={() => setDeleteModal(false)}
        onDelete={() => setDeleteModal(false)}
        onCancel={() => setDeleteModal(false)} //for the time being

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
