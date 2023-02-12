import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import TaskEdit from "./screens/TaskEdit";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="TaskEdit"
        component={TaskEdit}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
