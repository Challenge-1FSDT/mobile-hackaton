import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import React from 'react';
import { Text, View } from 'react-native';

export default function Checkin(){

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Checkin tela</Text>
      </View>
    </>
  );
};
