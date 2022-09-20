import { Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { useRoute } from "@react-navigation/native";

export default function TaskEdit() {
  const route = useRoute();
  const { title } = route.params;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}
