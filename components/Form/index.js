import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";

const Form = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const hanldeSubmit = () => {
    if (task.trim() === "") {
      alert("Please enter your task!");
      return;
    }
    onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addTask}
    >
      <TextInput
        style={styles.input}
        placeholder="Your Task"
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <TouchableOpacity onPress={hanldeSubmit}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>ADD</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
