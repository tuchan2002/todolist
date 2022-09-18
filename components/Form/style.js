import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  addTask: {
    bottom: 16,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "80%",
    backgroundColor: color.white,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: color.secondary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: color.text,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.secondary,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  icon: {
    fontWeight: "bold",
    color: color.white,
    fontSize: 18,
  },
});

export default styles;
