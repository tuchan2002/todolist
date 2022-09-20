import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Form = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const hanldeSubmit = () => {
    if (title.trim() === "") {
      alert("Please enter your task!");
      return;
    }
    onAddTask(title);
    setTitle("");
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
        onChangeText={(text) => setTitle(text)}
        value={title}
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
