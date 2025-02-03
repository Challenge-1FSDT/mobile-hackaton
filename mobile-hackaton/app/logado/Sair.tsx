import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Sair(){

  const router = useRouter();

  // Redirecionar automaticamente assim que o componente for montado
  useEffect(() => {
    router.push("/");  // Redirecionamento para a tela index
  }, []);

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lista de algo</Text>
      </View>
    </>
  );
};
