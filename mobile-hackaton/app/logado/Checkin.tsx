import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Checkin(){

  //Na linha 17, precisa ser programaticamente, para disparar o calculo da distancia e o tempo
  function registrarCheckinAula(){



    router.push('/checkout/Checkout');

  }

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>

              <Text style={styles.title}>Disciplina</Text>

              <Text style={styles.inputGroup}>É permitido realizar o check-in da aula até 10 minutos com antecedência e será conferido pelo professor. </Text>
              
              <TouchableOpacity style={styles.button} onPress={registrarCheckinAula}>
                <Text style={styles.buttonText} disabled={false}>Check-in</Text>
              </TouchableOpacity>

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
      backgroundColor: "#6B46C1",
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
    },
    errorText: {
      color: "red",
      textAlign: "center",
      marginBottom: 16,
      fontWeight: "bold",
    },
});
