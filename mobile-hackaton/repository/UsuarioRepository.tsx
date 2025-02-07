import { ENDPOINTS } from '@/constants/Endpoints';
import axios from './../node_modules/axios/index';

export async function getLogin(email : string, password: string) {

  try {
    
      const response = await axios.post(`${ENDPOINTS.LOGIN}`, {email, password});

      return response.data; // Retorna os dados da resposta

  } catch (error: any) {

      if(error.response?.data?.error?.statusCode==401){
        throw new Error("Login e/ou Senha estão incorretos, por favor tente novamente.");
      }

      throw new Error(error.response?.data?.message || error.message);
  }

}