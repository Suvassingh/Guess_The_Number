import { Text, View, StyleSheet } from "react-native";
import OTitle from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <OTitle>Opponents Guess</OTitle>
      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
