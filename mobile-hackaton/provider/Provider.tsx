import { ThemeContext } from '@react-navigation/native';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

/*
//Tempo de aula
const tempoAula = createContext('light');

interface ThemeProviderProps {
    children: ReactNode;  // Tipando o children corretamente
}

// Criando o componente Provider
export default function ThemeProvider(children : ReactNode) {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}
*/


interface TimerContextType {
    tempoRestante: number;
    formatTime: (time: number) => string;
}
// Criando o contexto
const TimerContext = createContext<TimerContextType | undefined>(undefined);//createContext(null);

// Função Provedor de Timer
export function TimerProvider( children : ReactNode,
                               dataInicial : string,
                               dataFinal : string) {
  
   //calculando o tempo
   const calculandoTempoRestante = () => {
        const now = new Date();
        const endTime = new Date(dataFinal); // Data final passada como prop
        //const startTime = new Date(dataInicial); // Data inicial passada como prop
        const timeDifference = endTime.getTime() - now.getTime(); // Calculando a diferença em milissegundos
        return Math.max(0, timeDifference / 1000); // Convertendo de milissegundos para segundos e garantindo que não seja negativo
    };

  const [tempoRestante, setTempoRestante] = useState(calculandoTempoRestante());

  useEffect(() => {
    if (tempoRestante > 0) {
      const tempo = setInterval(() => {
        setTempoRestante((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(tempo); // Limpa o intervalo ao desmontar ou atualizar
    }
  }, [tempoRestante]);

  // Função para formatar o tempo
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <TimerContext.Provider value={{ tempoRestante, formatTime }}>
      {children}
    </TimerContext.Provider>
  );
}


