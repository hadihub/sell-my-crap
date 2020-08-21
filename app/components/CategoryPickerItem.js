import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import CircularIcon from './CircularIcon';

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <CircularIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={60}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
  },
});
