import React from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import WaveUtil from '../../components/WaveUtil';
import HandlerTouchableUtil from '../../components/HandlerTouchableUtil.jsx';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecoverPasswordScreen = () => {

  const navigation = useNavigation();

  const ReturnLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>

      <HandlerTouchableUtil utilFunction={ReturnLogin} handlerstyle={styles.return_btn}>
        <Ionicons name="caret-back-outline" size={32} color="black" />
      </HandlerTouchableUtil>

      <WaveUtil
        customStyles={{
          position: 'absolute',
          zIndex: 90,
          top: 0,
          width: Dimensions.get('window').width
        }}
        customHeight={90}
        svgStyle={{ position: 'absolute', top: 75 }}
        customBgColor={"#142C42"}
        customWavePattern={
          "M0,192L30,213.3C60,235,120,277,180,256C240,235,300,149,360,128C420,107,480,149,540,154.7C600,160,660,128,720,133.3C780,139,840,181,900,213.3C960,245,1020,267,1080,250.7C1140,235,1200,181,1260,149.3C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        }
      />

      <View style={styles.cardContainer}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
          placeholderTextColor="#A9CEDB"
        />
        <HandlerTouchableUtil utilFunction={ReturnLogin} handlerstyle={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
        </HandlerTouchableUtil>
      </View>

      <WaveUtil
        customStyles={{
          position: 'absolute',
          bottom: 0,
          zIndex: 90,
          width: Dimensions.get('window').width
        }}
        customHeight={90}
        svgStyle={{ position: 'absolute', bottom: 75 }}
        customBgColor={"#142C42"}
        customWavePattern={
          "M0,224L24,229.3C48,235,96,245,144,213.3C192,181,240,107,288,64C336,21,384,11,432,26.7C480,43,528,85,576,90.7C624,96,672,64,720,90.7C768,117,816,203,864,202.7C912,203,960,117,1008,90.7C1056,64,1104,96,1152,96C1200,96,1248,64,1296,58.7C1344,53,1392,75,1416,85.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#A9CEDB",
    position: "relative",
  },
  cardContainer: {
    margin: 'auto',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000'
  },
  return_btn: {
    width: "10%",
    marginTop: "8%",
    borderRadius: 10,
    margin: "4%",
    paddingVertical: "1%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A9CEDB",
    zIndex: 1000
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#142C42',
  },
  input: {
    width: '100%',
    height: 40,
    color: '#51626F',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 40,
    color: '#A9CEDB',
    backgroundColor: '#142C42',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundTop: {
    flex: 1,
    justifyContent: 'flex-center',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RecoverPasswordScreen;
