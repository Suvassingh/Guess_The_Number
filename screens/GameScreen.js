import { Text, View, StyleSheet, FlatList } from "react-native";
import OTitle from "../components/UI/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/card";
import InstructionText from "../components/UI/InstructionTextComponent";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/Game/GuessLog";
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
  const initialGuess = genetateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      alert("Game Over");
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minboundry = 1;
    maxboundry = 100;
  }, []);
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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }
  const guessRoundLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <OTitle>Opponents Guess</OTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View  style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLog
              roundNumber={guessRoundLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
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
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  buttonContainer: {
    flex: 1,
    minWidth: 100,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
