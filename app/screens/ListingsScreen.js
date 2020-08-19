import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
