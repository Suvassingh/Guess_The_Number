import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import Colors from "../constant/colors";
import OTitle from "../components/UI/Title";
import Card from "../components/UI/card";
import InstructionText from "../components/UI/InstructionTextComponent";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number must in beteween 1 and 99 ", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDis = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDis }]}>
          <OTitle>Guess my number</OTitle>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
// const deviceheight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    // marginTop: deviceheight < 400 ? 30 : 100,
    alignItems: "center",
    marginBottom: 40,
  },
  inputContainer: {
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
  instructionText: {
    color: Colors.acent500,
    fontSize: 24,
  },

  numberInput: {
    height: 56,
    width: 56,
    fontSize: 32,
    borderBottomColor: Colors.acent500,
    borderBottomWidth: 3,
    color: Colors.acent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  buttonContainer: {
    flex: 1,
    minWidth: 100,
  },
});
