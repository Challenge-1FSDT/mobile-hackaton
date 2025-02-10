import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { useAula } from '@/provider/AulaContext';
import { useAuth } from '@/provider/AuthContext';
import { salvarCheckinOuCheckOut } from '@/repository/CheckinRepository';
import { calculandoDiferencaDeDataFim } from '@/utilitarios/CalculoDeDataUtil';
import { decodeBase64Token } from '@/utilitarios/ConverterJWTEmObjetoUtil';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
// Função de cálculo de diferença de tempo

export default function Checkout() {

const {token} = useAuth();
const [timeLeft, setTimeLeft] = useState(0); // Inicializa com 0 para calcular o tempo restante corretamente
const [isTimeUp, setIsTimeUp] = useState(false); // Estado para controlar a visibilidade do botão

const { aulaSelecionada } = useAula(); 

useEffect(() => {
  if (aulaSelecionada?.endAt) {
    // Usa a função para calcular a diferença em segundos
    const differenceInSeconds = calculandoDiferencaDeDataFim(aulaSelecionada.endAt);
    setTimeLeft(differenceInSeconds);

    // Se o tempo já acabou, marca como time up
    if (differenceInSeconds <= 0) {
      setIsTimeUp(true);
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsTimeUp(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Limpa o intervalo quando o componente desmonta ou o tempo chega a zero
      return () => clearInterval(timer);
    }
  }
}, [aulaSelecionada]);

// Formata o tempo para minutos e segundos
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const registrarCheckoutAula = async() => {
  
  const usuarioObj = decodeBase64Token(token);

  try{
    await salvarCheckinOuCheckOut(token, usuarioObj.sub, escolaSelecionado);
  }catch(erro){
    Alert.alert('Checkin com erro', 'Não foi possível realizer seu check-out, por favor, comunique o professor');
    return;
  }

  router.navigate('/logado/Aulas');

};


  return (
   <View style={{backgroundColor: 'black', height: '100%'}}>
    <View style={styles.conteudo}>
      
      {!isTimeUp && (
        <Text style={styles.titulo}>Foco total</Text>
      )}

      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      
      {/* Condicional para exibir o botão apenas quando o tempo for zero */}
      {isTimeUp && (
        <Button title="Finalizar" onPress={registrarCheckoutAula} color="green" />
      )}

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  conteudo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  timerText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
  titulo: {
    color: 'white',
    position: 'absolute', // Torna o texto posicionado de forma absoluta na tela
    top: 10, // Distância do topo
    left: 10, // Distância do lado esquerdo
    fontSize: 20, // Ajuste o tamanho do texto, se necessário
  },
});
