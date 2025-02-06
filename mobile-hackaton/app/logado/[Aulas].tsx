import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import Lista from '@/components/lista/Lista';
import { useAuth } from '@/provider/AuthContext';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { listarAulas } from '@/repository/AulasRepository';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Aulas(){

  const { token, setToken } = useAuth();
  const [aulasPossiveis, setAulasPossiveis] = useState([]);
  const params: { id: string } = useLocalSearchParams();
  const {escolaSelecionado} = useEscolaEscolhida();

  //---------------------------------

  const { id } = params;
  const [loading, setLoading] = useState(true);

   //---------------------------------

  const fetchListarAulas = async (valorToken:string) => {
    
    try {
      
      console.log('*************************');
      console.log('>>> listar aulas: '+valorToken+'<<<');
      console.log('>>> listar aulas: '+valorToken+'<<<');
      console.log('*************************');

      const response = await listarAulas(valorToken, escolaSelecionado); // Chama a função que retorna as escolas

      setAulasPossiveis(response.data); // Atualiza o estado com as escolas
    } catch (error) {
      console.error("Erro ao aulas:", error); // Handle erro
    } finally {
      setLoading(false); // Define loading como false após a requisição
    }
    
  };


  //listar aulas
  useEffect(() => {

    console.log('o que tem com o token que não está funcionando? '+token);
    fetchListarAulas(token);
  }, []);

  useEffect(() => {
    
    if (!loading && aulasPossiveis.length === 1) {
      router.push('/logado/Aulas'); // Redireciona caso exista apenas uma escola
    }

  }, [loading, aulasPossiveis]); // A dependência deve ser o `loading` e `escolas`


   // Caso as escolas ainda estejam sendo carregadas
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando Aulas disponíveis...</Text>
      </View>
    );
  }


  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Lista>
        </Lista>
      </View>
    </>
  );
};




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
