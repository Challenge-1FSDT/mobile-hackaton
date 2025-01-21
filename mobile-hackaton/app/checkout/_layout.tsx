import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export default function RootLayout(){
    return (
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Checkout"/>
            </Stack>
            )
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

