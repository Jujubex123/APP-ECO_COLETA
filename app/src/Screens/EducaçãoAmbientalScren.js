import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import { Audio } from 'expo-av';

const perguntas = [
  import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Leaf, Droplet, Recycle, Sun } from 'lucide-react-native';

export default function EducacaoAmbientalScreen({ navigation }) {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const perguntas = [
    {
      id: 1,
      pergunta: 'Qual é a melhor forma de economizar água em casa?',
      opcoes: ['Lavar o carro com mangueira', 'Fechar a torneira ao escovar os dentes', 'Tomar banhos longos'],
      resposta: 'Fechar a torneira ao escovar os dentes',
      icone: <Droplet color="#2196F3" size={28} />
    },
    {
      id: 2,
      pergunta: 'Qual destes materiais pode ser reciclado?',
      opcoes: ['Papel', 'Restos de comida', 'Papel higiênico usado'],
      resposta: 'Papel',
      icone: <Recycle color="#4CAF50" size={28} />
    },
    {
      id: 3,
      pergunta: 'Qual dessas atitudes ajuda o meio ambiente?',
      opcoes: ['Desligar luzes ao sair do cômodo', 'Jogar lixo na rua', 'Deixar aparelhos ligados'],
      resposta: 'Desligar luzes ao sair do cômodo',
      icone: <Sun color="#FFB300" size={28} />
    },
  ];

  const responder = (pergunta, opcao) => {
    if (answered) return;
    if (opcao === pergunta.resposta) setScore(score + 1);
    setAnswered(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Educação Ambiental Interativa 🌎</Text>

      {perguntas.map((p) => (
        <View key={p.id} style={styles.card}>
          <View style={styles.headerPergunta}>
            {p.icone}
            <Text style={styles.pergunta}>{p.pergunta}</Text>
          </View>

          {p.opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={styles.botaoOpcao}
              onPress={() => responder(p, opcao)}
            >
              <Text style={styles.textoOpcao}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {answered && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>
            Você acertou {score} de {perguntas.length} perguntas! 🌱
          </Text>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  headerPergunta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: '#2E7D32',
    flex: 1,
    flexWrap: 'wrap',
  },
  botaoOpcao: {
    backgroundColor: '#BBDEFB',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  textoOpcao: {
    color: '#0D47A1',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultado: {
    marginTop: 30,
    backgroundColor: '#FFF9C4',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 18,
    color: '#1B5E20',
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#FFB300',
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
  },
  textoBotaoVoltar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
