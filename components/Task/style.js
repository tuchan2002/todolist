import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginBottom: 16,
    padding: 12,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    fontSize: 16,
  },
  iconWrapper: {
    marginLeft: "auto",
  },
  icon: {
    fontSize: 25,
    color: color.danger,
  },
});

export default styles;
