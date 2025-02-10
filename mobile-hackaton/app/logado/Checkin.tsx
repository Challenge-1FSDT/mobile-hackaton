import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { getDistance } from 'geolib';
import { useAula } from '@/provider/AulaContext';

export default function Checkin(){

  const [distance, setDistance] = useState<number>(0);

  const {escolaLocalizacao} = useEscolaEscolhida();
  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando
  const [permissaoNegada, setPermissaoNegada] = useState(false); // Estado para indicar se está carregando
  const {aulaSelecionada}  = useAula();

  //-------------------------------

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Permissão negada para acessar a localização!');
      setLoading(false);
      setPermissaoNegada(true);
      return;
    }

    const localizacaoAtual = await Location.getCurrentPositionAsync({});

    const referencePoint = {
      latitude: escolaLocalizacao[0],
      longitude: escolaLocalizacao[1],
    };

    //---------------------------------------------
    //captura a localizacao atual

    console.log('Localizacao atual: ',{ latitude: localizacaoAtual.coords.latitude, longitude: localizacaoAtual.coords.longitude });
    console.log('Localizacoa da escola: ',referencePoint);

    //---------------------------------------------

    //Verificar a distancia

    const distance = getDistance(
      { latitude: localizacaoAtual.coords.latitude, longitude: localizacaoAtual.coords.longitude },
      referencePoint
    );

    setDistance(Number((distance/ 1000).toFixed(2)));

    console.log('Distancia do aluno: ',distance);

    //---------------------------------------------

    setLoading(false);
  };

  //Na linha 17, precisa ser programaticamente, para disparar o calculo da distancia e o tempo
  function registrarCheckinAula(){

    if(distance>5){
      Alert.alert('Aviso', 'Sua distância em relação a escola é superior a 5km! Por favor, comunique a um professor.');
      return;
    }

    let dataInicial = aulaSelecionada?.startAt;

    

    router.push('/checkout/Checkout');

  }

  useEffect(() => {

    getLocation(); // Chama a função quando o componente for montado

  }, []);


  // Caso as escolas ainda estejam sendo carregadas
  if (loading) {
    return (
      <>
        <CabecalhoPrivado />
        <View style={styles.container}>
          <Text style={styles.title}>Carregando...</Text>
        </View>
      </>
    );
  }

  if(permissaoNegada){
    return (
      <>
        <CabecalhoPrivado />
        <View style={styles.container}>
          <Text style={styles.title}>Permissão de localizacao negada, por favor saia do aplicativo e tente novamente, autorizando o uso da captura do localização</Text>
        </View>
      </>
    );
  }

  /*
  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>

              <Text style={styles.title}>{aulaSelecionada.name}</Text>
              
              <View>

                  <View>
                    <Text>Início</Text>
                    <Text>{new Date(aulaSelecionada.startAt)
                                  .toLocaleTimeString('pt-BR', {
                                                                  hour: '2-digit',
                                                                  minute: '2-digit',
                                                                }) 
                            || 'Não foi localizado o horário inicial'}</Text>
                  </View>

                  <View>
                    <Text>Fim </Text>
                    <Text>{new Date(aulaSelecionada.endAt)
                                  .toLocaleTimeString('pt-BR', {
                                                                  hour: '2-digit',
                                                                  minute: '2-digit',
                                                                }) 
                            || 'Não foi localizado o horário inicial'}</Text>
                  </View>

              </View>

              <Text style={styles.inputGroup}>É permitido realizar o check-in da aula até 10 minutos com antecedência e será conferido pelo professor. </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={registrarCheckinAula}>
                  <Text style={styles.buttonText} disabled={false}>Realizar Check-in</Text>
                </TouchableOpacity>
              </View>

          </View>
      </View>
    </>
  );*/

  return (
    <>
      <CabecalhoPrivado />
      <View style={styles.mainContent}>
        <View>
          <Text style={styles.sectionTitle}>{aulaSelecionada.name}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Início:</Text>
              <Text style={styles.infoValue}>
                {new Date(aulaSelecionada.startAt).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                }) || 'Não foi localizado o horário inicial'}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fim:</Text>
              <Text style={styles.infoValue}>
                {new Date(aulaSelecionada.endAt).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                }) || 'Não foi localizado o horário final'}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sala:</Text>
              <Text style={styles.infoValue}>{aulaSelecionada.sala || 'Não informado'}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Alunos:</Text>
              <Text style={styles.infoValue}>{aulaSelecionada.alunos || 'Não informado'}</Text>
            </View>
          </View>

          <Text style={styles.infoText}>
            É permitido realizar o check-in da aula até 10 minutos com antecedência e será conferido pelo professor.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={registrarCheckinAula}>
              <Text style={styles.buttonText}>Realizar Check-in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E9D8FD',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9D8FD',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6B46C1',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4C51BF',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C51BF',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A5568',
  },
  infoText: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6B46C1',
    padding: 15,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
