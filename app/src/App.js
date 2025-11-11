import React from 'react';
import { View, Text } from 'react-native';
import dados from './data/dados.json';


import React from "react";
import HazardousDisposalScreen from "./screens/HazardousDisposalScreen";

export default function App() {
  return <HazardousDisposalScreen />;
}

import NotificacaoColeta from "./NotificacaoColeta";

export default function App() {
    return <NotificacaoColeta />;
}

import AgendamentoColeta from "./AgendamentoColeta";
export default function App() {
    return <AgendamentoColeta />;
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import EducacaoAmbientalScreen from './screens/EducacaoAmbientalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Educacao" component={EducacaoAmbientalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import EducacaoAmbientalScreen from './screens/EducacaoAmbientalScreen';
