import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { useAula } from '@/provider/AulaContext';
import { useAuth } from '@/provider/AuthContext';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { salvarCheckinOuCheckOut } from '@/repository/CheckinRepository';
import { calculandoDiferencaDeDataInicio } from '@/utilitarios/CalculoDeDataUtil';
import calculandoData from '@/utilitarios/CalculoDeDataUtilMoment';
import { decodeBase64Token } from '@/utilitarios/ConverterJWTEmObjetoUtil';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { getDistance } from 'geolib';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Checkin(){

  const [distance, setDistance] = useState<number>(0);

  const {token} = useAuth();
  const {escolaLocalizacao, escolaSelecionado} = useEscolaEscolhida();

  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando
  const [permissaoNegada, setPermissaoNegada] = useState(false); // Estado para indicar se está carregando
  const {aulaSelecionada} = useAula();

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

  //-----------------------------------------------------------------------------

  async function registrarCheckinAula(){

    let dataInicial = aulaSelecionada?.startAt;

    console.log('verificando data: ', dataInicial);

    //const diferencaMinutos = calculandoDiferencaDeDataInicio(dataInicial);

    //-------------------------------------------------------------
    // Verificar se deu check-in até 10 minutos antes
    /*
    if (diferencaMinutos < -10 || diferencaMinutos > 10) {
      Alert.alert('Atraso', 'Check-in só pode ser feito 10 minutos antes ou depois da aula começar, por favor, comunique o professor ao final da aula.');
      return;
    }
      */

    //-------------------------------------
    //Diferença de distância
    if(distance>5){
      Alert.alert('Aviso', 'Sua distância em relação a escola é superior a 5km! Por favor, comunique a um professor.');
      return;
    }
    
    //-------------------------------------------------------------
    //captura o objeto do token para realizar o checkout
    
    //const usuarioObj = decodeBase64Token(token);

    /*
    try{

      console.log(" >>>> JSON >>>>"+JSON.stringify(escolaSelecionado));
      await salvarCheckinOuCheckOut(token, aulaSelecionada?.id, escolaSelecionado);
    }catch(erro){
      console.error(' >> Checkin >> Teste: ',erro);
      Alert.alert('Checkin com erro', 'Não foi possível realizer seu check-in, por favor, comunique o professor');
      return;
    }*/
    
    router.navigate('/logado/Checkout');

  }

  useEffect(() => {

    getLocation(); // Chama a função quando o componente for montado
    //calculandoData(aulaSelecionada.endAt);
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
                {moment(aulaSelecionada.startAt).utc().format('HH:mm') || 'Não foi localizado o horário inicial'}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fim:</Text>
              <Text style={styles.infoValue}>
                {moment(aulaSelecionada.endAt).utc().format('HH:mm') || 'Não foi localizado o horário final'}
              </Text>
            </View>

              {/*
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sala:</Text>
              <Text style={styles.infoValue}>{aulaSelecionada.sala || 'Não informado'}</Text>
            </View>*/}

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
