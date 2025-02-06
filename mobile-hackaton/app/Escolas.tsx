import CabecalhoPublico from '@/components/cabecalho-publico/CabecalhoPublico';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from "expo-router";
import { getLogin } from '@/repository/UsuarioRepository';
import { Ionicons } from '@expo/vector-icons'; 
import CardEscola from '@/components/cardEscola/CardEscola';
import { listarEscola } from '@/repository/EscolaRepository';
import { useAuth } from '@/provider/AuthContext';

export default function ListaEscola() {
  const [escolas, setEscolas] = useState([]); // Estado para armazenar as escolas
  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando
  //const {token} = useAuth();
  let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODgxMTEwMywiZXhwIjoxNzM4ODk3NTAzfQ.gFZOtVlaTSoIDSNlMWP11em3_08ydWNbOOPq9tSWIKMsZ8nZPoFkmjn6GmSLxg5jgYFvaEN4g6qVqXHBta0adc6BoDqG6zC6NqedizAYuffaNnyGH7Ug28quuEv6vwIxpyBdop0JBiMLTs2GR1J76Bm_EKALB8gqGXRRX2QKupEj1yjbohmoTtSDd4FRwD-Ney1zIPCTSADhhGlvid_TKU44xV6fDe1bwGG_LXPktR2GkmAv1g3G58zyvzUj5jdzQgl2UuFWCNixjFnFBE6VIE6E2LQwhGq7TRopfGRaqj8C96dLl_qmt_wbh-CAGzUpmAaijOQKFg5sxTTWtYi8oA';
  //console.log(`>>> teste token: ${token}`);

  // Função para chamar listarEscola e atualizar o estado
  const fetchEscolas = async (token: any) => {

    //console.log('>>> fetchEscolas >>> '+token);
    
    try {

      const response = await listarEscola(token); // Chama a função que retorna as escolas

      setEscolas(response.data); // Atualiza o estado com as escolas
    } catch (error) {
      console.error("Erro ao listar escolas:", error); // Handle erro
    } finally {
      setLoading(false); // Define loading como false após a requisição
    }
   
  };

  useEffect(() => {
    console.log('>>> Escola >>> token' + token);
    fetchEscolas(token); // Chama a função quando o componente for montado
  }, []);

  useEffect(() => {
    
    if (!loading && escolas.length === 1) {
      router.push('/logado/Aulas'); // Redireciona caso exista apenas uma escola
    }

  }, [loading, escolas]); // A dependência deve ser o `loading` e `escolas`

  // Caso as escolas ainda estejam sendo carregadas
  if (loading) {
    return (
      <>
        <CabecalhoPublico />
        <View style={styles.container}>
          <Text style={styles.title}>Carregando escolas...</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <CabecalhoPublico />
      <View style={styles.container}>
        <Text style={styles.title}>Suas matriculas</Text>
        {/* Aqui você pode listar as escolas, caso existam mais de uma */}
        {escolas.map((escola, index) => (
       
              <CardEscola
                    key={escola.id || index}
                    idEscola={escola?.id}
                    fantasyName={escola?.fantasyName}
                    address={escola?.address}
                    city={escola?.city}
              ></CardEscola>
         
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E9D8FD", // Purple-200
    justifyContent: "space-between",  // Para distribuir os itens ao longo da tela
  },
  cardCentralizados: {
    flex: 1, // Garante que o card ocupe o máximo de espaço disponível
    //justifyContent: 'center', // Centraliza o card verticalmente dentro do seu contêiner
    //alignItems: 'center', // Centraliza o card horizontalmente
    width: '100%', // Garantir que ocupe toda a largura disponível
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6B46C1", // Purple-800
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#6B46C1", // Purple-800
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "#FAF5FF", // Purple-100
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6BCFA", // Purple-300
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#4C51BF", // Purple-600
  },
  button: {
    backgroundColor: "#6B46C1", // Purple-800
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20, // Adiciona um pouco de espaço entre o botão e o conteúdo abaixo
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  radioOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FAF5FF", // Purple-100
    borderWidth: 1,
    borderColor: "#D6BCFA", // Purple-300
  },
  radioSelected: {
    backgroundColor: "#6B46C1", // Purple-800
    borderColor: "#4C51BF", // Purple-600
  },
  radioText: {
    color: "#6B46C1", // Purple-800
    fontWeight: "bold",
  }
});
