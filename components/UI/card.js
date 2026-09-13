import { View, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function Card({ children }) {
  return <View style={styles.card} >{children }</View>
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary700,
    borderWidth: 1,
    borderColor: Colors.primary500,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
    alignItems: "center",
    gap: 16,
    marginTop: 18,
  },
});
