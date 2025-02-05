import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import Lista from '@/components/lista/Lista';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Aulas(){

  const params: { id: string } = useLocalSearchParams();
  const {escolaSelecionado} = useEscolaEscolhida();

  const { id } = params;

  useEffect(() => {
    const fetchPost = async () => {
      console.log('------------------');
      console.log('teste');
      console.log('------------------');
    };

    fetchPost();
  }, [id]);

  console.log('Escola Escolhida: '+escolaSelecionado);

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Lista>
        </Lista>
      </View>
    </>
  );
};

