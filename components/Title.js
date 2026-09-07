import { Text, StyleSheet } from "react-native";

function OTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default OTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
