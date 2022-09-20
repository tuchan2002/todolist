import { CheckBox, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Task = ({ title, onDeleteTask }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("TaskEdit", {
          title: title,
        })
      }
    >
      <View style={styles.item}>
        <CheckBox style={styles.checkbox} />
        <Text style={styles.content}>{title}</Text>
        <TouchableOpacity style={styles.iconWrapper} onPress={onDeleteTask}>
          <FontAwesome name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
