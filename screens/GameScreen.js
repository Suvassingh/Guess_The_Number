import { Text, View, StyleSheet } from "react-native";
import OTitle from "../components/UI/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
function genetateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return genetateRandomBetween(min, max, exclude);
  }
  return rndNum;
}
let minboundry = 1;
let maxboundry = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = genetateRandomBetween(
    1,
    100,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      alert("Game Over");
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      alert("Don't lie! You know that this is wrong...");
      return;
    }

    if (direction === "lower") {
      maxboundry = currentGuess;
      const newRandomNumber = genetateRandomBetween(
        minboundry,
        maxboundry,
        currentGuess,
      );
    } else {
      minboundry = currentGuess + 1;
    }
    const newRandomNumber = genetateRandomBetween(
      minboundry,
      maxboundry,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.screen}>
      <OTitle>Opponents Guess</OTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
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
