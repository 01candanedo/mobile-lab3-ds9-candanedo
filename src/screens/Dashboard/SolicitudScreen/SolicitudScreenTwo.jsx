import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import WaveUtil from '../../../components/WaveUtil';
import { useNavigation } from '@react-navigation/native';

const Screen = () => {
  const navigation = useNavigation();

  const handleNextButtonPress = () => {
      navigation.navigate("SolicitudThree")
  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Solicitud - 2</Text>

      <WaveUtil
        customStyles={{
          position: 'absolute',
          zIndex: -1,
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

      <View style={[styles.cardContainer, { padding: 30 }]}>

        <View style={styles.card}>
          <Text style={styles.label}>Costos del servicio</Text>
          <Text style={styles.cost}>$13.45</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>ITBMS</Text>
          <Text style={styles.cost}>$2.10</Text>
        </View>

        <View style={[styles.card, styles.fullWidthCard]}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.cost}>$15.55</Text>
        </View>

        <TouchableOpacity onPress={handleNextButtonPress} style={styles.paypalButton}>
          <Text style={styles.paypalButtonText}>PayPal Buy Now</Text>
        </TouchableOpacity>

      </View>

      <WaveUtil
        customStyles={{
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A9CEDB",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    elevation: 3, // Esto proporciona una sombra en Android
    shadowColor: '#000000', // Color de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 3, // "Borde" de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cost: {
    fontSize: 18,
    fontWeight: '400',
  },
  fullWidthCard: {
    flex: 2, // Esto hace que esta tarjeta sea el doble de ancha que las otras
  },
  paypalButton: {
    backgroundColor: '#0070ba',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  paypalButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen;
