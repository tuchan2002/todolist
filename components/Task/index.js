import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Task = ({ task, number, onDeleteTask }) => {
  const numberText = number < 10 ? "0" + number : number;
  const squareBg = number % 2 === 0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.item}>
        <View style={[styles.square, squareBg]}>
          <Text style={styles.number}>{numberText}</Text>
        </View>
        <Text style={styles.content}>{task}</Text>
        <TouchableOpacity style={styles.iconWrapper} onPress={onDeleteTask}>
          <Text style={styles.icon}>❌</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
