import CabecalhoPublico from '@/components/cabecalho-publico/CabecalhoPublico';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput,StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from "expo-router";
import { getLogin } from '@/repository/UsuarioRepository';
import { Ionicons } from '@expo/vector-icons'; 
import { useAuth } from '@/provider/AuthContext';

export default function Index(){

  //const [userType, setUserType] = useState<"user" | "admin">("user");
  
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let {token, setToken} = useAuth();

  //------------------------------

  //Formulário de login
  const [formLogin, setFormLogin] = useState({
    email: "aluno@fiap.com",
    password: "Fiap2024+",
  });

  // Função para lidar com mudanças nos campos de formulário
  const handleInputChange = (name: string, value: string) => {
    setFormLogin((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };
  
  //-----------------------------

  const handleLogin = async () => {

    console.log('-------------------------');
    console.log('' + formLogin.email +' - ' +formLogin.password + '');
    console.log('-------------------------');

    try {

      let userData = await AsyncStorage.getItem('user');

      console.log('--------------------------------------------------');

      const response = await getLogin(formLogin.email, formLogin.password);

      console.log('--------------------------------------------------');
      console.log('SENHOR DOS ANEIS');
      console.log(userData);
      console.log(response);
      setToken(response?.data?.accessToken);

      console.log("Token antes de ser atualizado: ", token); // Isso ainda vai ser o antigo valor do token

  
      console.log('--------------------------------------------------');
      console.log('----------');

      router.push('/Escolas');

    } catch (error: any) {

      if (error instanceof Error) {
        console.log('----------');
        console.log('-->Erro<--');
        console.log(error.message)
        console.log('----------');

        setError(error.message);
      } else {
        console.log('----------');
        console.log('-->Erro<--');
        console.log(error)
        console.log('----------');
        setError("Ocorreu um erro na autenticação tente novamente");
      }
    }


  };


  return (
    <>
      <CabecalhoPublico />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>LOGIN</Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="aluno@fiap.com"
              value={formLogin.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="********"
                value={formLogin.password}
                onChangeText={(text) => handleInputChange("password", text)}
                secureTextEntry={!showPassword} // Controla a visibilidade da senha
              />
              {/* Ícone de olho */}
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"} // Altera o ícone dependendo do estado
                  size={24}
                  color="gray"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
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
