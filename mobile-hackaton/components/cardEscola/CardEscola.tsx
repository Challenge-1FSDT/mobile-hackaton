import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { useLinkTo } from '@react-navigation/native';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text,  StyleSheet, TouchableOpacity} from 'react-native';

interface CardEscolaProps {
  //name: string; //Nome oficial da Empresa LTD.
  fantasyName: string; // Nome Fantasia da Escola
  //taxId: number; //(perguntar depois)
  address: string; //Endereço
  city: string; //Cidade
  //state: string; //Estado
  //location: number[]; // Coordenadas [latitude, longitude]
  //createdAt?: string; // Data de criação (opcional)
  //updatedAt?: string; // Data de atualização (opcional)
}

export default function CardEscola({idEscola,
                                    fantasyName,
                                    address,
                                    city
                                  }: CardEscolaProps) {  

    const {setEscola} = useEscolaEscolhida();

    function escolaEscolhida(){
        setEscola(idEscola);
        router.push('/logado/Aulas');
    }

    return (
      <TouchableOpacity onPress={escolaEscolhida}>
        <View style={styles.card}>
          {/* Conteúdo do Card */}
          <View style={styles.content}>
            <Text style={styles.title}>{fantasyName || 'Nome da Escola não informado'}</Text>
            <Text style={styles.description}>
              {(`${address} - ${city}`) || 'Endereço não localizado'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    marginBottom: 16,
    width: '100%',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});