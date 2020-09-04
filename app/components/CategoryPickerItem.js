import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import CircularIcon from './CircularIcon';

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <CircularIcon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
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
