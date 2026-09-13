import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import OTitle from "../components/UI/Title";
import Colors from "../constant/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootcontainer}>
        <OTitle>GAME OVER</OTitle>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summartText}>
          Your Phone Needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          Guess the Number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>{" "}
    </ScrollView>
  );
}
export default GameOverScreen;
// const devicewidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootcontainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: devicewidth < 380 ? 75 : 150,
    // width: devicewidth < 380 ? 150 : 300,
    // height: devicewidth < 380 ? 150 : 300,
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
