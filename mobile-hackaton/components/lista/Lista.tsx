import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; // react-native-vector-icons/FontAwesome


export default function CardAulas({value}:any){

function teste(){
  router.push('/logado/Checkin')
}




return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <Text style={styles.author}>Nome da Displina: {value.name}</Text>
      <Text style={styles.description}>Hora de inicio: { new Date(value.startAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) + ' - ' + new Date(value.startAt).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }) }</Text> 
      <Text style={styles.description}>Hora de fim: { new Date(value.startAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) + ' - ' + new Date(value.endAt).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }) }</Text> 
      <View style={styles.actions}>
        <TouchableOpacity onPress={teste}
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