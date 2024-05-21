import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const TrackingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <MaterialIcons name="timer" size={24} color="black" />
        <Text style={styles.label}>Tiempo estimado</Text>
        <Text>10 minutos</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 9.0032,
            longitude: -79.5158,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Destino"
            description="Aquí estás"
          />
        </MapView>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar Solicitud</Text>
      </TouchableOpacity>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 50,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3, 
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mapContainer: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  confirmButton: {
    backgroundColor: '#0070ba',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 15,
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TrackingScreen;
