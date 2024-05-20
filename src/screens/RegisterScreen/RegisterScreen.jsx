import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import GradientText from "../../components/GradientText.jsx";
import HandlerTouchableUtil from "../../components/HandlerTouchableUtil.jsx";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import InputForm from "../../components/InputForm.jsx";
import { useState } from "react";

export default function App() {
  const navigation = useNavigation();
  const { control, formState: { errors }, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const ReturnLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headertab}>

        <HandlerTouchableUtil utilFunction={ReturnLogin} handlerstyle={styles.return_btn}>
          <Ionicons name="caret-back-outline" size={32} color="black" />
        </HandlerTouchableUtil>

      </View>
      <View style={styles.formstyle}>
        <Text style={styles.textGradient}>
          Register
        </Text>

        <View style={styles.textInputsContainer}>

          <InputForm
            name={"name"}
            rules={{
              required: { value: true, message: "*Required" },
              minLength: { value: 2, message: "Min Length" }
            }}
            style={[styles.inputText, { width: '45%' }]}
            pholdertitle={"Name"}
            maxl={15}
            pholdercolor={"#666666"}
            control={control}
          />

          <InputForm
            name={"lastname"}
            rules={{
              required: { value: true, message: "*Required" },
              minLength: { value: 4, message: "Min Length - 4" }
            }}
            style={[styles.inputText, { width: '45%' }]}
            pholdertitle={"Lastname"}
            maxl={20}
            pholdercolor={"#666666"}
            control={control}
          >

          </InputForm>

          <View style={[{ width: '100%', flexDirection: 'row' }]}>
            {
              errors.name
                ? <Text style={[styles.errorText, { width: '45%' }]}>
                  {errors.name.message}
                </Text>
                : <Text style={[styles.errorText, { width: '45%' }]} />
            }
            {
              errors.lastname
                ? <Text style={[styles.errorText, { width: '45%' }]}>
                  {errors.lastname.message}
                </Text>
                : <Text style={[styles.errorText, { width: '45%' }]} />
            }

          </View>


          <InputForm
            name={"username"}
            rules={{
              required: { value: true, message: "*Required" },
              minLength: { value: 3, message: "Min Length - 3" }
            }}
            style={[styles.inputText, { width: '70%' }]}
            pholdertitle={"Username"}
            maxl={30}
            pholdercolor={"#666666"}
            control={control}
          />

          <InputForm
            name={"age"}
            rules={{
              required: { value: true, message: "*Required" },
              min: { value: 18, message: "Min age - 18" }
            }}
            style={[styles.inputText, { width: '20%' }]}
            pholdertitle={"Age"}
            maxl={2}
            ktype={"numeric"}
            pholdercolor={"#666666"}
            control={control}
          />

          <View style={[{ width: '100%', flexDirection: 'row' }]}>
            {
              errors.username
                ? <Text style={[styles.errorText, { width: '70%' }]}>
                  {errors.username.message}
                </Text>
                : <Text style={[styles.errorText, { width: '70%' }]} />
            }
            {
              errors.age
                ? <Text style={[styles.errorText, { width: '20%' }]}>
                  {errors.age.message}
                </Text>
                : <Text style={[styles.errorText, { width: '20%' }]} />
            }
          </View>

          <View style={[{ width: '100%', flexDirection: 'row' }]}>
            <Text style={[styles.errorText, { width: '25%' }]} />
            {
              errors.phone
                ? <Text style={[styles.errorText, { width: '65%' }]}>
                  {errors.phone.message}
                </Text>
                : <Text style={[styles.errorText, { width: '65%' }]} />
            }
          </View>

          <InputForm
            name={"email"}
            rules={{
              required: { value: true, message: "*Required" },
              minLength: { value: 10, message: "Min Length - 10" }
            }}
            style={[styles.inputText, { width: '95%' }]}
            pholdertitle={"Email"}
            maxl={255}
            ktype={"email-address"}
            pholdercolor={"#666666"}
            control={control}
          />

          <View style={[{ width: '100%', flexDirection: 'row' }]}>
            {
              errors.email
                ? <Text style={[styles.errorText, { width: '95%' }]}>
                  {errors.email.message}
                </Text>
                : <Text style={[styles.errorText, { width: '95%' }]} />
            }
          </View>

          <InputForm
            name={"password"}
            rules={{
              required: { value: true, message: "*Required" },
              minLength: { value: 8, message: "Min Length - 8" }
            }}
            style={[styles.inputText, { width: '95%' }]}
            pholdertitle={"Password"}
            maxl={255}
            secureTextE={true}
            pholdercolor={"#666666"}
            control={control}
          />

          <View style={[{ width: '100%', flexDirection: 'row' }]}>
            {
              errors.password
                ? <Text style={[styles.errorText, { width: '95%' }]}>
                  {errors.password.message}
                </Text>
                : <Text style={[styles.errorText, { width: '95%' }]} />
            }
          </View>

        </View>

        <HandlerTouchableUtil utilFunction={handleSubmit()} handlerstyle={styles.registerButton} >
          <Text style={styles.buttonText}>Save</Text>
        </HandlerTouchableUtil>

      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#142C42",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    zIndex: -1,
  },
  headertab: {
    height: "15%",
  },
  return_btn: {
    width: "10%",
    marginTop: "18%",
    borderRadius: 10,
    margin: "4%",
    paddingVertical: "1%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A9CEDB"
  },
  registerButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#A9CEDB",
    padding: 15,
    fontSize: "8px",
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  formstyle: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
  },

  textGradient: {
    color: "#A9CEDB",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 18,
  },

  textInputsContainer: {
    width: '100%',
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingVertical: '4%'
  },

  inputText: {
    padding: 20,
    borderColor: "#424242",
    borderWidth: 1,
    borderRadius: 20,
    color: "#D4D4D4",
    backgroundColor: "#1C1C1C",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
    marginLeft: '5%',
    marginBottom: '1%',
    textAlign: "left"
  }
});