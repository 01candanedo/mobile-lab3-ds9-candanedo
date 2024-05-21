import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import WaveUtil from '../../../components/WaveUtil';

const Dashboard = () => {
  // Información de ejemplo del usuario logueado
  const userData = {
    name: "Juan Pérez",
    email: "juan@example.com",
    role: "Administrador",
    avatar: require('../../../../assets/favicon.png'), // Ajusta la ruta de tu avatar
  };

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      data: [20, 45, 28, 80],
    }],
  };

  const notificationsData = [
    { message: "Nueva orden recibida", date: "20 de mayo, 2024" },
    { message: "Actualización de producto", date: "19 de mayo, 2024" },
    { message: "Pago confirmado", date: "18 de mayo, 2024" },
  ];

  const ordersData = [
    { id: 1, date: '2024-05-20', customer: 'Planchado', total: 3.45 },
    { id: 2, date: '2024-05-19', customer: 'Secado', total: 1.30 },
    { id: 3, date: '2024-05-18', customer: 'Sacos', total: 6.15 },
  ];


  const renderItem = ({ item }) => (
    <View style={styles.orderRow}>
      <Text style={styles.orderCell}>{item.id}</Text>
      <Text style={styles.orderCell}>{item.date}</Text>
      <Text style={styles.orderCell}>{item.customer}</Text>
      <Text style={styles.orderCell}>{item.total}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

          <View style={styles.userCard}>
            <Image source={userData.avatar} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userData.name}</Text>
              <Text style={styles.userInfoText}>Email: {userData.email}</Text>
              <Text style={styles.userInfoText}>Rol: {userData.role}</Text>
            </View>
          </View>

          <View style={styles.statsCard}>
            <Text style={styles.cardTitle}>Lavanderias Cercanas</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>SUP-PERC-KLIN</Text>
                <Text style={styles.statLabel}>Cantidad de servicios: 4</Text>
                <Text style={styles.statValue}>3.2km</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>HERMANOS LUO</Text>
                <Text style={styles.statLabel}>Cantidad de servicios: 3</Text>
                <Text style={styles.statValue}>2.6km</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>MARIA CHENG LAVANDERIA</Text>
                <Text style={styles.statLabel}>Cantidad de servicios: 4</Text>
                <Text style={styles.statValue}>3.0km</Text>
              </View>
            </View>
          </View>

          <View style={styles.notificationsCard}>
            <Text style={styles.cardTitle}>Notificaciones</Text>
            {notificationsData.map((notification, index) => (
              <View style={styles.notificationItem} key={index}>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationDate}>{notification.date}</Text>
              </View>
            ))}
          </View>

          <View style={styles.statsCard}>
            <Text style={styles.cardTitle}>Washed</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Laundry service</Text>
                <Text style={styles.statValue}>$8.75</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Items dried this month</Text>
                <Text style={styles.statValue}>1,115</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={ordersData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            ListHeaderComponent={<Text style={styles.headerText}>Solicitudes Recientes</Text>}
          />

          <View style={styles.chartCard}>
            <BarChart
              data={data}
              width={280}
              height={180}
              yAxisSuffix=""
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(20, 44, 66, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(20, 44, 66, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
            />


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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#A9CEDB",
  },
  flatListContent: {
    marginBottom: 20,
    backgroundColor: "#142C42",
    borderRadius: 10,
    padding: 20,
    color: "#fff",
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfoText: {
    fontSize: 16,
    color: '#555',
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: "#A9CEDB",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  chartCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
  },
  notificationsCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 10,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  notificationDate: {
    fontSize: 14,
    color: '#555',
  },
  orderRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#A9CEDB",
  },
  orderCell: {
    flex: 1,
    fontSize: 11,
    color: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: "#A9CEDB",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Dashboard;
