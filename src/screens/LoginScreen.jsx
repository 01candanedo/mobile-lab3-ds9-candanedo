import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText.jsx";
import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

export default function App() {
  const navigation = useNavigation();

  const ValidateLogin = () => {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/Launder_Link_slogan.png")}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(20, 44, 66, 1)"]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
      <View style={styles.secondContainer}>
      <Text style={styles.textGradient}>
          Welcome!
        </Text>

        <View style={styles.emailInputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Email or Username"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#999"}
          />

          <Text style={styles.recover}>Recover Password?</Text>
        </View>
        
        <HandlerTouchableUtil utilFunction={ValidateLogin} handlerstyle={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
        </HandlerTouchableUtil>
        
        <Text style={styles.forgetPasswordText}>
          Don't have an account yet?{" "}
          <Text
            style={styles.forgetPasswordLink}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "50%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  emailInputContainer: {
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 20,
    bottom: 5,
  },

  passwordInputContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    paddingHorizontal: 20,
  },

  inputText: {
    padding: 20,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    color: "#fff",
  },
  secondContainer: {
    height: "50%",
    backgroundColor: "rgba(20, 44, 66, 1)",
    display: "flex",
    alignItems: "center",
  },
  recover: {
    marginTop: 10,
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  loginButton: {
    width: "80%",
    backgroundColor: "#a9cedb",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    opacity: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
  },
  forgetPasswordText: {
    marginTop: 10,
    color: "#fff",
  },
  forgetPasswordLink: {
    color: "#A9CEDB",
    fontWeight: "900",
  },
  textGradient: {
    color: "#A9CEDB",
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 18,
  },
});
