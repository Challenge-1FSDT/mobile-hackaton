import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Checkout(){

  const [timeLeft, setTimeLeft] = useState(1); // 45 minutos em segundos
  const [isTimeUp, setIsTimeUp] = useState(false); // Estado para controlar a visibilidade do botão


  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Limpa o intervalo ao desmontar ou atualizar
    } else {
      setIsTimeUp(true); // Quando o tempo chega a 0, o botão será exibido
    }
  }, [timeLeft]);


  // Formata o tempo para minutos e segundos
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleButtonPress = () => {
    router.push('/logado/Aulas');
    // Adicione aqui a lógica para o que deve acontecer ao clicar no botão
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
        <Button title="Finalizar" onPress={handleButtonPress} color="green" />
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
