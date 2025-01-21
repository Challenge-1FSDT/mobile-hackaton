import React from 'react';
import { View, Text,  StyleSheet} from 'react-native';
import { Link } from "expo-router";

export default function CabecalhoPrivado() {  

    return (
      <View style={styles.navbar}>
        <View style={styles.navContent}>
          {/* Logo */}
           <Link href="/logado/Aulas">
            <Text style={styles.logo}>
              LEARN<Text style={styles.highlight}>ON</Text>
            </Text>
          </Link>
          
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 90, // altura da navbar
    backgroundColor: "#5340C6",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    zIndex: 1000, // para garantir que a navbar fique acima de outros componentes
    elevation: 5, // sombra no Android
    position: "relative", // removendo a posição absoluta para evitar sobreposição
  },
  navContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2A2379",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  highlight: {
    color: "#4C51BF",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  buttonText: {
    color: "#5340C6",
    fontWeight: "bold",
  },
});
