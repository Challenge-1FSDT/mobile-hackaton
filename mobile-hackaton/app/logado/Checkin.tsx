import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Checkin(){

  //Na linha 17, precisa ser programaticamente, para disparar o calculo da distancia e o tempo

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Checkin tela</Text>

        <Link href="/checkout/Checkout"  style={{ backgroundColor: '#A020F0'}}>Teste</Link>

      </View>
    </>
  );
};
