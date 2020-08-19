import React from "react";
import Constants from "expo-constants"; // To get the status bar height
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
