import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import WaveUtil from '../../../components/WaveUtil';
import { Picker } from '@react-native-picker/picker';

const FormPage = () => {
    const [currentRequest, setCurrentRequest] = useState('');
    const [driverName, setDriverName] = useState('');
    const [status, setStatus] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

    const handleFormSubmit = () => {
        // Lógica para enviar el formulario
    };

    // Opciones para el selector de estado
    const statusOptions = ['En proceso', 'Completado', 'Cancelado'];

    return (
        <ScrollView contentContainerStyle={styles.container}>

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

            <View style={[{ padding: 30 }]}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Solicitud Activa</Text>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Solicitud en Curso:</Text>
                        <TextInput
                            style={styles.input}
                            value={currentRequest}
                            onChangeText={text => setCurrentRequest(text)}
                            placeholder="Su-perc-klin -- Servicio N1: Camisas Blancas"
                            disabled
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Nombre del conductor:</Text>
                        <TextInput
                            style={styles.input}
                            value={driverName}
                            onChangeText={text => setDriverName(text)}
                            placeholder="John Smith"
                            disabled
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Estado:</Text>
                        <Picker
                            style={styles.input}
                            selectedValue={status}
                            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                        >
                            {statusOptions.map((option, index) => (
                                <Picker.Item key={index} label={option} value={option} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Tiempo Estimado:</Text>
                        <TextInput
                            style={styles.input}
                            value={estimatedTime}
                            onChangeText={text => setEstimatedTime(text)}
                            placeholder="45:01 min"
                            disabled
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={handleFormSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Entendido</Text>
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

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#A9CEDB",
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formItem: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default FormPage;
