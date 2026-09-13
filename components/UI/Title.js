import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constant/colors";

function OTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default OTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.white,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
