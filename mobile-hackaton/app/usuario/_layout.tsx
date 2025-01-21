import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Checkout"/>
      </Tabs>
  );
}
