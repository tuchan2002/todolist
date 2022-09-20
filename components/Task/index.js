import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = ({ task, onDeleteTask }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("TaskEdit", {
          title: task.title,
        })
      }
    >
      <View style={styles.item}>
        <BouncyCheckbox isChecked={task.completed} />
        <View>
          <Text style={styles.content}>{task.title}</Text>
        </View>
        <TouchableOpacity style={styles.iconWrapper} onPress={onDeleteTask}>
          <FontAwesome name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
