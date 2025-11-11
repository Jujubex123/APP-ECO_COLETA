import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Principal</Text>

            <TouchableOpacity style={[styles.card, styles.card1]}>
                <Ionicons name="calendar-outline" size={28} color="#fff" />
                <Text style={styles.cardText}>Agendar Coleta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.card2]}>
                <Ionicons name="warning-outline" size={28} color="#fff" />
                <Text style={styles.cardText}>Descarte Perigoso</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.card3]}>
                <Ionicons name="chatbox-ellipses-outline" size={28} color="#fff" />
                <Text style={styles.cardText}>Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.card4]}>
                <Ionicons name="notifications-outline" size={28} color="#fff" />
                <Text style={styles.cardText}>Notificações</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f1f5f9", alignItems: "center", paddingTop: 80 },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2563EB",
        marginBottom: 30,
    },
    card: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 14,
        marginVertical: 10,
        elevation: 5,
    },
    card1: { backgroundColor: "#22C55E" },
    card2: { backgroundColor: "#2563EB" },
    card3: { backgroundColor: "#F97316" },
    card4: { backgroundColor: "#FACC15" },
    cardText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Principal 🌿</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Educacao')}>
                <Text style={styles.buttonText}>Educação Ambiental</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#FFB300' }]}>
                <Text style={styles.buttonText}>Agendar Coleta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#29B6F6' }]}>
                <Text style={styles.buttonText}>Locais de Descarte</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#C8E6C9', justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 26, fontWeight: 'bold', color: '#1B5E20', marginBottom: 20 },
    button: { backgroundColor: '#4CAF50', padding: 14, borderRadius: 10, width: '80%', marginVertical: 10, alignItems: 'center' },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
