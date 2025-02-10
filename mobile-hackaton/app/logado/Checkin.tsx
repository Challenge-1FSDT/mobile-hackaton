import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import { getDistance } from 'geolib';

export default function Checkin(){

  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const [distance, setDistance] = useState<number>(0);

  const {escolaLocalizacao} = useEscolaEscolhida();
  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando
  const [permissaoNegada, setPermissaoNegada] = useState(false); // Estado para indicar se está carregando

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
    
    console.log('')

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

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>

              <Text style={styles.title}>Disciplina</Text>
              
              <View>

                  <View>
                    <Text>Início</Text>
                    <Text>{}</Text>
                  </View>

                  <View>
                    <Text>Fim</Text>
                  </View>

                  <View>
                    <Text>Sala</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E9D8FD",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6B46C1",
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#6B46C1",
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "#FAF5FF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6BCFA",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#4C51BF",
    width: '100%',
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -40, // Ajusta o posicionamento do ícone
    padding: 10,
  },
  button: {
    backgroundColor: "#6B46C1", // Roxo
    padding: 15, // Padding interno para ajustar o texto
    borderRadius: 60, // Torna o botão redondo
    alignItems: "center",
    justifyContent: "center", // Centraliza o texto no círculo
    width: 120, // Largura do círculo
    height: 120, // Altura do círculo (mesma da largura para formar o círculo)
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16, // Tamanho ajustado para caber no círculo
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});
