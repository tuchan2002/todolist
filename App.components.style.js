import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    color: color.secondary,
    fontWeight: "bold",
  },
  items: {
    marginVertical: 16,
  },
});

export default styles;
