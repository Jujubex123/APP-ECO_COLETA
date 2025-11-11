import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function FeedbackUsuario() {
    const [feedback, setFeedback] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [corMensagem, setCorMensagem] = useState("#2b7a2b");

    const enviarFeedback = () => {
        const texto = feedback.trim();

        if (texto === "") {
            setMensagem("⚠️ Por favor, escreva algo antes de enviar.");
            setCorMensagem("orange");
        } else {
            setMensagem("✅ Obrigado pelo seu feedback!");
            setCorMensagem("#2b7a2b");
            setFeedback("");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Deixe seu Feedback</Text>

            <TextInput
                style={styles.textarea}
                placeholder="Digite seu feedback aqui..."
                placeholderTextColor="#777"
                multiline
                value={feedback}
                onChangeText={setFeedback}
            />

            <TouchableOpacity style={styles.botao} onPress={enviarFeedback}>
                <Text style={styles.textoBotao}>Enviar Feedback</Text>
            </TouchableOpacity>

            <Text style={[styles.mensagem, { color: corMensagem }]}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2fdf2",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        color: "#2b7a2b",
        fontWeight: "bold",
        marginBottom: 15,
    },
    textarea: {
        width: 300,
        height: 100,
        borderColor: "#2b7a2b",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        backgroundColor: "#fff",
        textAlignVertical: "top", // mantém texto no topo
    },
    botao: {
        backgroundColor: "#2b7a2b",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 10,
    },
    textoBotao: {
        color: "#fff",
        fontSize: 16,
    },
    mensagem: {
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 16,
    },
});
