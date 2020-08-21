import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, FormSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).matches().label('Password'),
});

export default function LoginScreen() {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          /*Refer to TextInput Props*/
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboarType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppFormField
          /*Refer to TextInput Props*/
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <FormSubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});
