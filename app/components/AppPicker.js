import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.color.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.color.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});
