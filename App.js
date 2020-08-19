import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View, StyleSheet, TextInput, Text, Switch } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppScreen from "./app/components/AppScreen";
import CircularIcon from "./app/components/CircularIcon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <AppScreen>
      <AppPicker icon="apps" placeholder="category" />
      <AppTextInput icon="email" placeholder="email" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
