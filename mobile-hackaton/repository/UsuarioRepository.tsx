import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario, UsuarioForm } from '../types/Usuario';
import axios from './../node_modules/axios/index';
import { ENDPOINTS } from '@/constants/Endpoints';

export async function getLogin(email : string, password: string) {

  try {
    
      const response = await axios.post(`${ENDPOINTS.LOGIN}`, {email, password});
      console.log('Tentativa de login');
      console.log('response >> '+JSON.stringify(response));

      return response.data; // Retorna os dados da resposta

  } catch (error: any) {

      console.log('erro na autenticação: '+ (error.response?.data?.error?.statusCode==401));

      if(error.response?.data?.error?.statusCode==401){
        //console.error(`Login e/ou Senha estão incorretos, por favor tente novamente. `);
        throw new Error("Login e/ou Senha estão incorretos, por favor tente novamente.");
      }

      //console.error(`Erro na autenticacao: `, error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
  }

}