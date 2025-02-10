import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function LogadoLayout(){
    return (
        <Tabs
        screenOptions={{ headerShown: false,
          tabBarStyle: {
            backgroundColor: "#2A2379", // Cor da barra inferior
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: 70, // Altura da barra inferior
            margin: 0
          },
          tabBarActiveTintColor: "#FFFFFF", // Cor do ícone ativo
          tabBarInactiveTintColor: "#A9A9A9", // Cor do ícone inativo
        }}
        >
          <Tabs.Screen name="Aulas" 
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}/>
          <Tabs.Screen 
              name="Sair"
              options={{
                title: "Sair",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="sign-out" color={color} />,
              }}
          />

          {/* Rotas Ocultas */}
          <Tabs.Screen name="Checkin"
            options={{
              href: null
            }}
          />
          {/* Rotas Ocultas */}
          <Tabs.Screen name="Checkout"
            options={{
              href: null
            }}
          />
          
        </Tabs>


    )
}
