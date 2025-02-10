import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import CardAulas from '@/components/CardAulas/CardDisciplina';
import { useAula } from '@/provider/AulaContext';
import { useAuth } from '@/provider/AuthContext';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { listarAulas } from '@/repository/AulasRepository';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Aulas(){

  const { token } = useAuth();
  const [aulasPossiveis, setAulasPossiveis] = useState<any[]>([]);
  const {escolaSelecionado} = useEscolaEscolhida();
 
  //---------------------------------

  const [loading, setLoading] = useState(false);

   //---------------------------------

  const fetchListarAulas = async (valorToken:string) => {
    
    setLoading(true);

    try {

      console.log('-----------------------------------------------');
      console.log(' >>> Valor Token >>> ', valorToken);
      console.log(' >>> Escola Selecionada >>> ', escolaSelecionado);
      console.log('-----------------------------------------------');

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

    if(!token) return 
    fetchListarAulas(token);
  }, []);

   // Caso as escolas ainda estejam sendo carregadas
  if (loading) {
    return (
      <>
        <CabecalhoPrivado></CabecalhoPrivado>
        <View style={styles.container}>
          <Text>Carregando Aulas disponíveis...</Text>
        </View>
      </>
    );
  }


  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
              {aulasPossiveis.map((aula, index)=>(
                  <CardAulas key={index}
                  value={aula}
                  >
                  </CardAulas>
              ))}
          </View>
        </ScrollView>
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
