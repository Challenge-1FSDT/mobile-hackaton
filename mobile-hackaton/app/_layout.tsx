import AuthProvider from '@/provider/AuthContext';
import EscolaEscolhidaProvider from '@/provider/EscolaEscolhidaContext';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };

    hideSplash(); // Esconde a splash screen assim que o layout renderizar
  }, []);

  return (

      <AuthProvider>
        <EscolaEscolhidaProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="App"/>
              <Stack.Screen name="Escolas"/>
            </Stack>
        </EscolaEscolhidaProvider>
      </AuthProvider>
  );
}
