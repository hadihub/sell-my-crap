import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, { width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.color.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={defaultStyles.text} {...otherProps} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});
