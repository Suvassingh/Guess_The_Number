import { View, Image, StyleSheet, Text } from "react-native";
import OTitle from "../components/UI/Title";
import Colors from "../constant/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootcontainer}>
      <OTitle>GAME OVER</OTitle>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summartText}>
        Your Phone Needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to Guess
        the Number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summartText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
