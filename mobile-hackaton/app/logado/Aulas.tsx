import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import React from 'react';
import { Text, View } from 'react-native';

export default function Aulas(){

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lista de Aulas</Text>
      </View>
    </>
  );
};
