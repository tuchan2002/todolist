import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import Settings from "./screens/Settings";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="gear" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
