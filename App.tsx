import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import Register from './src/pages/register'
import LoginScreen from './src/pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
       
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
       
    );
}

