import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen.jsx'
import HomeScreen from './src/screens/Dashboard/HomeScreen/HomeScreen.jsx'
import RecoverScreen from './src/screens/Recover/RecoveryScreen.jsx'
import SolicitudScreen from './src/screens/Dashboard/SolicitudScreen/SolicitudScreen.jsx'
import SolicitudScreenTwo from './src/screens/Dashboard/SolicitudScreen/SolicitudScreenTwo.jsx'
import SolicitudScreenThree from './src/screens/Dashboard/SolicitudScreen/SolicitudScreenThree.jsx'
import SeguimientoScreen from './src/screens/Dashboard/SeguimientoScreen/SeguimientoScreen.jsx'
import HistorialScreen from './src/screens/Dashboard/HistorialScreen/HistorialScreen.jsx'
import PerfilScreen from './src/screens/Dashboard/PerfilScreen/PerfilScreen.jsx'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const StackNavigator = createNativeStackNavigator();
const TabsNavigator = createBottomTabNavigator();

function StackRouter() {
    return (
        <StackNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="Register" component={RegisterScreen} />
            <StackNavigator.Screen name="Recover" component={RecoverScreen} />
            <StackNavigator.Screen name="SolicitudTwo" component={SolicitudScreenTwo} />
            <StackNavigator.Screen name="SolicitudThree" component={SolicitudScreenThree} />
            <StackNavigator.Screen name="Home" component={TabsRouter} />
        </StackNavigator.Navigator>
    );
}

function TabsRouter() {
    const navigation = useNavigation();
    return (
        <TabsNavigator.Navigator initialRouteName="Principal" screenOptions={{
            headerShown: true,
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.logoutButton}
                >
                    <Ionicons name="log-out-outline" size={36} color="black" />
                </TouchableOpacity>
            )
        }}>
            <TabsNavigator.Screen name="Principal" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    ),
                }} />
            <TabsNavigator.Screen name="Solicitud" component={SolicitudScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-sharp" size={size} color={color} /> // Ejemplo de otro icono
                    ),
                }} />
            <TabsNavigator.Screen name="Seguimiento" component={SeguimientoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-sharp" size={size} color={color} /> // Ejemplo de otro icono
                    ),
                }} />
            <TabsNavigator.Screen name="Historial" component={HistorialScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-sharp" size={size} color={color} /> // Ejemplo de otro icono
                    ),
                }} />
            <TabsNavigator.Screen name="Perfil" component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-sharp" size={size} color={color} /> // Ejemplo de otro icono
                    ),
                }} />
        </TabsNavigator.Navigator>

    );

}

const styles = StyleSheet.create({
    logoutButton: {
        marginRight: 15,
    },
});

const Routes = () => {
    return (
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    );
};

export default Routes;