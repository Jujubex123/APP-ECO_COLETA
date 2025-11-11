import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "" || senha === "") {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }
    navigation.navigate("Menu");
  };

  return (
    <LinearGradient colors={["#22C55E", "#2563EB"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Eco-Coleta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Ionicons name="menu" size={28} color="#2563EB" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    width: 320,
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#22C55E",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  btn: {
    backgroundColor: "#22C55E",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: { color: "white", fontWeight: "bold", fontSize: 16 },
  link: { color: "#2563EB", marginTop: 10 },
  menuButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FACC15",
    borderRadius: 50,
    padding: 8,
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eco Coleta ♻️</Text>
            <TextInput
                placeholder="Usuário"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}
                value={pass}
                onChangeText={setPass}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8F5E9' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#2E7D32', marginBottom: 30 },
    input: { width: '80%', backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 12 },
    button: { backgroundColor: '#4CAF50', padding: 12, borderRadius: 10, width: '80%', alignItems: 'center' },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
