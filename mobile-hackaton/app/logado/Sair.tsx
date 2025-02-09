import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { useAuth } from '@/provider/AuthContext';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Sair(){

  const router = useRouter();
  const {setToken} = useAuth();

  // Redirecionar automaticamente assim que o componente for montado
  useEffect(() => {
    setToken("");
    router.push("/");  // Redirecionamento para a tela index
  }, []);

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aguarde redirecionamento...</Text>
      </View>
    </>
  );
};
