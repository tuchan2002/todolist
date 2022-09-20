import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import { Alert, FlatList, View } from "react-native";
import Form from "../../components/Form";
import Task from "../../components/Task";
import styles from "./style";
import uuid from "react-native-uuid";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
        );
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onAddTask = (title) => {
    const newTask = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const onDeleteTask = (taskId) => {
    Alert.alert("Are you sure?", "You won't be able to revert this!", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          const tasksTemp = tasks.filter((task) => task.id !== taskId);
          setTasks(tasksTemp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.body}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            title={item.title}
            onDeleteTask={() => onDeleteTask(item.id)}
          />
        )}
      />

      <Form onAddTask={onAddTask} />
    </View>
  );
}
