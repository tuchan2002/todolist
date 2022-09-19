import { Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { useRoute } from "@react-navigation/native";

export default function TaskEdit() {
  const route = useRoute();
  const { taskName } = route.params;
  return (
    <View style={styles.container}>
      <Text>{taskName}</Text>
    </View>
  );
}
