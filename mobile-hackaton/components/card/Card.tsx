import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // react-native-vector-icons/FontAwesome

export default function PostCard(){

return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <Text style={styles.author}>Autor: </Text>
      <Text style={styles.description} numberOfLines={5}></Text>
      <View style={styles.actions}>

          <View style={styles.editDeleteContainer}>
            <TouchableOpacity  style={styles.iconButton}>
              <Icon name="edit" size={16} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="trash" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
        <TouchableOpacity 
         style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Check in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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