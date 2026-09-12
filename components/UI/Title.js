import { Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function OTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default OTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
