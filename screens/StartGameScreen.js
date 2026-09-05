import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#3b021f",
    borderWidth: 1,
    borderColor: "#72063f",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
    alignItems: "center",
    gap: 16,
  },
  numberInput: {
    height: 56,
    width: 56,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 3,
    color: "#ddb52f",
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
