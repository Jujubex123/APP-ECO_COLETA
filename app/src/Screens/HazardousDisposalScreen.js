import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, MapPin, Trash2 } from "lucide-react-native";

const hazardousLocations = [
    {
        id: "1",
        name: "Ecoponto UVV - Eletrônicos, Pilhas e Baterias",
        address: "Campus Boa Vista, Av. Comissário José Dantas de Melo, Vila Velha",
    },
    {
        id: "2",
        name: "Ecoponto Itapuã - Óleos e Lâmpadas",
        address: "Rua Ceará, Itapuã, Vila Velha",
    },
    {
        id: "3",
        name: "Ecoponto Aribiri - Baterias e Eletrônicos",
        address: "Av. Jerônimo Monteiro, Aribiri, Vila Velha",
    },
];

export default function HazardousDisposalScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const onChangeDate = (event, date) => {
        setShowPicker(false);
        if (date) setSelectedDate(date);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Descarte de Resíduos Perigosos</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Trash2 color="white" size={20} />
                <Text style={styles.buttonText}>Agendar Descarte</Text>
            </TouchableOpacity>

            {/* Modal com locais de descarte */}
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Locais de Descarte - Vila Velha</Text>

                    <FlatList
                        data={hazardousLocations}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <MapPin color="#2e8b57" size={18} />
                                <View>
                                    <Text style={styles.locationName}>{item.name}</Text>
                                    <Text style={styles.locationAddress}>{item.address}</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={styles.dateSection}>
                        <Text style={styles.dateText}>
                            Data selecionada: {selectedDate.toLocaleString("pt-BR")}
                        </Text>
                        <TouchableOpacity
                            style={styles.dateButton}
                            onPress={() => setShowPicker(true)}
                        >
                            <Calendar color="white" size={18} />
                            <Text style={styles.dateButtonText}>Escolher Data</Text>
                        </TouchableOpacity>
                    </View>

                    {showPicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="datetime"
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}

                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={() => {
                            setModalVisible(false);
                            alert("Agendamento confirmado para " + selectedDate.toLocaleString("pt-BR"));
                        }}
                    >
                        <Text style={styles.confirmText}>Confirmar Agendamento</Text>
                    </TouchableOpacity>

                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0f7fa", // azul claro
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: "#00695c", // verde escuro
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#43a047", // verde principal
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        gap: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#f1f8e9", // verde suave
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0277bd", // azul primário
        marginBottom: 15,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff8e1", // amarelo claro
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        gap: 10,
    },
    locationName: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#00695c",
    },
    locationAddress: {
        color: "#555",
    },
    dateSection: {
        marginTop: 20,
        alignItems: "center",
    },
    dateText: {
        fontSize: 16,
        marginBottom: 10,
    },
    dateButton: {
        flexDirection: "row",
        backgroundColor: "#ffa726", // laranja
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        gap: 8,
    },
    dateButtonText: {
        color: "white",
        fontSize: 16,
    },
    confirmButton: {
        marginTop: 25,
        backgroundColor: "#fdd835", // amarelo
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    confirmText: {
        fontWeight: "bold",
        color: "#424242",
    },
});
