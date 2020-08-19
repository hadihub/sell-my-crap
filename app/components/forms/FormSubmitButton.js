import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppButton from "../AppButton";

export default function FormSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
