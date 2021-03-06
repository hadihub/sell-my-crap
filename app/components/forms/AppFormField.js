import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFromField({ name, width = '100%', ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();
  return (
    <React.Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)} // this sets the touched.email to true
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name] /*Equivalent to errors.name*/}
        visible={touched[name]}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
