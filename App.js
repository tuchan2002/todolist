import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import TaskEdit from "./screens/TaskEdit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="TaskEdit"
          component={TaskEdit}
          options={({ route }) => ({ title: route.params.taskName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
