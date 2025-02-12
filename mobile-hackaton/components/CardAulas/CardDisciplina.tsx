import { useAula } from '@/provider/AulaContext';
import { router } from 'expo-router';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function CardAulas({value}:any){

  const {aulaSelecionada, setAulaSelecionada} = useAula();

function CardAulasInicializando(aula:any){
  console.log('--------------------------------');
  console.log(' >>> CardAulasInicializando <<< ');
  setAulaSelecionada(aula);
  console.log('Objeto da aula: ',JSON.stringify(aula));
  router.push('/logado/Checkin');
  console.log('--------------------------------');
}

return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <Text style={styles.author}>Nome da Disciplina: {value.name}</Text>
      <Text style={styles.description}>Início: { moment(value.startAt).utc().format('HH:mm') }</Text> 
      <Text style={styles.description}>Fim: { moment(value.endAt).utc().format('HH:mm') }</Text> 
      <View style={styles.actions}>
        <TouchableOpacity onPress={()=>{CardAulasInicializando(value)}}
         style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Leia mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: "#C4BEE9",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 16,
    elevation: 5, // Sombra no Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: "#5340C6",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editDeleteContainer: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    backgroundColor: "#5340C6",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  readMoreButton: {
    backgroundColor: "#5340C6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  readMoreText: {
    color: "#FFF",
    fontSize: 14,
  },
});