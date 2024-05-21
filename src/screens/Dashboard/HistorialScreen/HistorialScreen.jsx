import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import WaveUtil from '../../../components/WaveUtil';
import { Picker } from '@react-native-picker/picker';

// Datos de ejemplo para el historial de transacciones
const transactionHistory = [
    { laundryName: 'Lavandería A', date: '2024-05-10', serviceTitle: 'Lavado y secado', productTitle: 'Camisa', price: 10 },
    { laundryName: 'Lavandería B', date: '2024-05-15', serviceTitle: 'Lavado', productTitle: 'Pantalón', price: 8 },
    { laundryName: 'Lavandería C', date: '2024-05-20', serviceTitle: 'Planchado', productTitle: 'Vestido', price: 12 },
    { laundryName: 'Lavandería A', date: '2024-06-05', serviceTitle: 'Lavado', productTitle: 'Sweater', price: 15 },
    { laundryName: 'Lavandería A', date: '2024-05-10', serviceTitle: 'Lavado y secado', productTitle: 'Camisa', price: 10 },
    { laundryName: 'Lavandería B', date: '2024-05-15', serviceTitle: 'Lavado', productTitle: 'Pantalón', price: 8 },
    { laundryName: 'Lavandería C', date: '2024-05-20', serviceTitle: 'Planchado', productTitle: 'Vestido', price: 12 },
    { laundryName: 'Lavandería A', date: '2024-06-05', serviceTitle: 'Lavado', productTitle: 'Sweater', price: 15 },
];

const TransactionHistoryPage = () => {
    const [filter, setFilter] = useState('day');

    // Función para filtrar el historial de transacciones
    const filterTransactions = () => {
        // Lógica de filtrado según el estado actual del filtro
        // Puedes implementar la lógica de filtrado por días, semanas y meses aquí
        // Por ahora, devolveremos todo el historial sin filtrar
        return transactionHistory;
    };

    // Función para renderizar las filas de la tabla
    const renderRows = () => {
        const filteredTransactions = filterTransactions();

        return filteredTransactions.map((transaction, index) => (
            <View style={styles.row} key={index}>
                <Text style={styles.cell}>{transaction.laundryName}</Text>
                <Text style={styles.cell}>{transaction.date}</Text>
                <Text style={styles.cell}>{transaction.serviceTitle}</Text>
                <Text style={styles.cell}>{transaction.productTitle}</Text>
                <Text style={styles.cell}>{transaction.price}</Text>
            </View>
        ));
    };

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

                <View style={styles.filters}>
                    <Picker
                        selectedValue={filter}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}
                    >
                        <Picker.Item label="Día" value="day" />
                        <Picker.Item label="Semana" value="week" />
                        <Picker.Item label="Mes" value="month" />
                    </Picker>
                </View>

                <View style={styles.table}>
                  
                    <View style={[styles.row, styles.headerRow]}>
                        <Text style={[styles.cell, styles.headerCell]}>Lavandería</Text>
                        <Text style={[styles.cell, styles.headerCell]}>Fecha</Text>
                        <Text style={[styles.cell, styles.headerCell]}>Servicio</Text>
                        <Text style={[styles.cell, styles.headerCell]}>Producto</Text>
                        <Text style={[styles.cell, styles.headerCell]}>Precio</Text>
                    </View>

                    <ScrollView>

                    {renderRows()}

                    </ScrollView>
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
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#A9CEDB",
    },
    filters: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: "#A9CEDB",
        borderRadius: 10,
    },
    picker: {
        width: '50%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        color: "#000",
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        fontSize: 11,
        padding: 10,
        height: '80%',
        backgroundColor:"#fff",
    },
    headerRow: {
        backgroundColor: '#142c42',
        color: "#A9CEDB",
        fontSize: 11,
        height: '10%'
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        color: "#A9CEDB",
        fontSize: 9,
        height: '20%',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontSize: 10,
    },
    headerCell: {
        fontWeight: 'bold',
        color: "#FFF",
    },
});

export default TransactionHistoryPage;
