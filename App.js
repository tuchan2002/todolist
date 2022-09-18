import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import styles from "./App.components.style";
import Form from "./components/Form";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState(["todo1", "todo2", "todo3"]);

  const onAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onDeleteTask = (index) => {
    Alert.alert("Are you sure?", "You won't be able to revert this!", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          const tasksTemp = [...tasks];
          tasksTemp.splice(index, 1);
          setTasks(tasksTemp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todolist</Text>

        <ScrollView style={styles.items}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              number={index + 1}
              onDeleteTask={() => onDeleteTask(index)}
            />
          ))}
        </ScrollView>
      </View>

      <Form onAddTask={onAddTask} />
    </View>
  );
}
