import Cabecalho from '@/components/cabecalho/Cabecalho';
import React from 'react';
import { View } from 'react-native';


export default function App(){

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cabecalho></Cabecalho>
    </View>
  );
};
