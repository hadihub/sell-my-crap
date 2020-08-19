import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import CircularIcon from "../components/CircularIcon";
import ListItem from "../components/lists/ListItem";
import ListItemSepartor from "../components/lists/ListItemSeparator";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Hadi M"
          subTitle="mh.elhadi@outlook.com"
          image={require("../assets/hadi.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSepartor}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <CircularIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<CircularIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
