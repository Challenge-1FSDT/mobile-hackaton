import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Checkout(){

  //const [timeLeft, setTimeLeft] = useState(60); // Tempo inicial em segundos
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutos em segundos

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Limpa o intervalo ao desmontar ou atualizar
    }
  }, [timeLeft]);


  // Formata o tempo para minutos e segundos
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Foco total</Text>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
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
