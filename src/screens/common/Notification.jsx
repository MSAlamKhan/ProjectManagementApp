import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { GlobalStyle } from "../../constant/GlobalStyle";
import Background from "../../components/common/Background";
import BackIcon from "../../components/common/BackIcon";
import NotificationCard from "../../components/common/NotificationCard";

const Notification = () => {
  const notification_data = [
    {
      id: 1,
      type: "Reminder",
      title: "Apply Success",
      description:
        "tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac",
      time: "10h ago",
    },
    {
      id: 2,
      title: "Interview Calls",
      description:
        "tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac",
      time: "10h ago",
    },
    {
      id: 3,
      title: "Apply Success",
      description:
        "tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac",
      time: "10h ago",
    },
  ];

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <Background>
        <BackIcon />
        <ScrollView>
          <View style={GlobalStyle.ph20}>
            <NotificationCard notification_data={notification_data} />
          </View>
        </ScrollView>
      </Background>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
