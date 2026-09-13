import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constant/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const devicewidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.acent500,
    padding: devicewidth < 450 ? 12 : 24,
    margin: devicewidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.acent500,
    fontSize: devicewidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
