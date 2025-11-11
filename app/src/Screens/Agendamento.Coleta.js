import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

// 🎨 Cores do tema
const cores = {
  verdePrimario: "#22c55e",
  azulPrimario: "#2563eb",
  laranjaSecundario: "#f97316",
  amareloSecundario: "#facc15",
  corFundo: "#f1f5f9",
  corTexto: "#1e293b",
  corErro: "#dc2626",
};

export default function AgendamentoColeta() {
  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [mensagem, setMensagem] = useState("");
  const [mostrarData, setMostrarData] = useState(false);
  const [mostrarHora, setMostrarHora] = useState(false);

  // 🔄 Carregar dados salvos ao abrir o app
  useEffect(() => {
    (async () => {
      const dataSalva = await AsyncStorage.getItem("dataColeta");
      const horaSalva = await AsyncStorage.getItem("horaColeta");
      const agendamentoSalvo = await AsyncStorage.getItem("agendamentoColeta");

      if (dataSalva) setData(new Date(dataSalva));
      if (horaSalva) setHora(new Date(horaSalva));
      if (agendamentoSalvo) {
        const dataFormatada = new Date(agendamentoSalvo).toLocaleString("pt-BR");
        setMensagem(`📦 Coleta já agendada para: ${dataFormatada}`);
      }
    })();
  }, []);

  // 📅 Salvar data
  const salvarData = async () => {
    await AsyncStorage.setItem("dataColeta", data.toISOString());
    setMensagem(`📅 Data salva: ${data.toLocaleDateString("pt-BR")}`);
  };

  // 🕒 Salvar hora
  const salvarHora = async () => {
    await AsyncStorage.setItem("horaColeta", hora.toISOString());
    setMensagem(`🕒 Horário salvo: ${hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`);
  };

  // ✅ Confirmar agendamento
  const confirmarAgendamento = async () => {
    const dataSalva = await AsyncStorage.getItem("dataColeta");
    const horaSalva = await AsyncStorage.getItem("horaColeta");

    if (!dataSalva || !horaSalva) {
      setMensagem("⚠️ Salve a data e o horário antes de confirmar.");
      return;
    }

    const dataHora = new Date(horaSalva);
    const dataSelecionada = new Date(dataSalva);
    dataSelecionada.setHours(dataHora.getHours());
    dataSelecionada.setMinutes(dataHora.getMinutes());

    await AsyncStorage.setItem("agendamentoColeta", dataSelecionada.toISOString());

    setMensagem(`✅ Coleta agendada para: ${dataSelecionada.toLocaleString("pt-BR")}`);
  };

  // ❌ Cancelar agendamento
  const cancelarAgendamento = async () => {
    await AsyncStorage.multiRemove(["dataColeta", "horaColeta", "agendamentoColeta"]);
    setMensagem("❌ Agendamento cancelado.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Agendar Coleta de Lixo</Text>

        {/* Seleção de Data */}
        <Text style={styles.label}>Escolha a Data:</Text>
        <TouchableOpacity style={styles.botaoPrimario} onPress={() => setMostrarData(true)}>
          <Text style={styles.textoBotao}>Salvar Data</Text>
        </TouchableOpacity>
        {mostrarData && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setMostrarData(false);
              if (selectedDate) setData(selectedDate);
            }}
          />
        )}

        {/* Seleção de Hora */}
        <Text style={styles.label}>Escolha o Horário:</Text>
        <TouchableOpacity style={styles.botaoPrimarioInvertido} onPress={() => setMostrarHora(true)}>
          <Text style={styles.textoBotao}>Salvar Horário</Text>
        </TouchableOpacity>
        {mostrarHora && (
          <DateTimePicker
            value={hora}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => {
              setMostrarHora(false);
              if (selectedTime) setHora(selectedTime);
            }}
          />
        )}

        {/* Botões de ação */}
        <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarAgendamento}>
          <Text style={styles.textoBotao}>Confirmar Agendamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCancelar} onPress={cancelarAgendamento}>
          <Text style={[styles.textoBotao, { color: cores.corTexto, fontWeight: "bold" }]}>
            Cancelar Agendamento
          </Text>
        </TouchableOpacity>

        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.corFundo,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    width: 340,
    alignItems: "center",
  },
  titulo: {
    color: cores.azulPrimario,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  label: {
    alignSelf: "flex-start",
    color: cores.azulPrimario,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  botaoPrimario: {
    backgroundColor: cores.verdePrimario,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  botaoPrimarioInvertido: {
    backgroundColor: cores.azulPrimario,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  botaoConfirmar: {
    backgroundColor: cores.verdePrimario,
    width: "100%",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  botaoCancelar: {
    backgroundColor: cores.amareloSecundario,
    width: "100%",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  mensagem: {
    marginTop: 16,
    fontWeight: "bold",
    color: cores.azulPrimario,
    minHeight: 22,
    textAlign: "center",
  },
});
