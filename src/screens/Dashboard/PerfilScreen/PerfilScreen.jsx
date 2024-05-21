import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import WaveUtil from '../../../components/WaveUtil';

const ProfileScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const guardarPerfil = () => {
        console.log('Perfil guardado:', { nombre, apellido, usuario, edad, correo, contraseña });
    };

    return (
        <View style={styles.container}>
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
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Nombre:</Text>
                            <TextInput
                                style={styles.input}
                                value={nombre}
                                onChangeText={setNombre}
                                placeholder="Nombre"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Apellido:</Text>
                            <TextInput
                                style={styles.input}
                                value={apellido}
                                onChangeText={setApellido}
                                placeholder="Apellido"
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Usuario:</Text>
                            <TextInput
                                style={styles.input}
                                value={usuario}
                                onChangeText={setUsuario}
                                placeholder="Usuario"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Edad:</Text>
                            <TextInput
                                style={styles.input}
                                value={edad}
                                onChangeText={setEdad}
                                placeholder="Edad"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Correo:</Text>
                            <TextInput
                                style={styles.input}
                                value={correo}
                                onChangeText={setCorreo}
                                placeholder="Correo"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Contraseña:</Text>
                            <TextInput
                                style={styles.input}
                                value={contraseña}
                                onChangeText={setContraseña}
                                placeholder="Contraseña"
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <Button title="Actualizar" onPress={guardarPerfil} />
                </View>

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
    card: {
        backgroundColor: '#fff',
        padding: 20,
        width: 300,
        margin: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        justifyContent: 'space-between',
        marginRight: 15,
    },
});

export default ProfileScreen;
