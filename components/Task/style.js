import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 2,
    alignItems: "center",
  },
  square: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  even: {
    backgroundColor: color.primary,
  },
  odd: {
    backgroundColor: color.green,
  },
  number: {
    fontWeight: "bold",
    color: color.white,
  },
  content: {
    marginLeft: 20,
    fontSize: 16,
  },
  iconWrapper: {
    marginLeft: "auto",
  },
  icon: {
    fontSize: 18,
  },
});

export default styles;
