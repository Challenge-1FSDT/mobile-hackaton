import { ENDPOINTS } from './../constants/Endpoints';
import axios from './../node_modules/axios';

export const listarEscola = async (token: any) => {
    
    const url = ENDPOINTS.GET_LISTAR_ESCOLAS;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Formato correto
            }
        });

        //console.log('>>> listarEscola >>>',response.data);
        return response.data; // Retorna os dados da resposta

    } catch (error: any) {
        console.error("Erro ao buscar escolas:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};

