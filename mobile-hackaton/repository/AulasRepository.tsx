import axios from './../node_modules/axios';
import { ENDPOINTS } from './../constants/Endpoints';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';

const getCurrentDateRange = () => {

    const now = new Date();

    // Data de início do dia
    const startAt = new Date(now);
    startAt.setUTCHours(0, 0, 0, 0);

    // Data de final do dia
    const endAt = new Date(now);
    endAt.setUTCHours(23, 59, 59, 999);

    return {
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString()
    };
};

export const listarAulas = async (token: string, idEscola: any) => {

    const {startAt, endAt} = getCurrentDateRange();

    const url = ENDPOINTS.GET_AULAS+idEscola+'&startAt='+startAt+'&endAt='+endAt;
    
    console.log('URL de aulas: ',url);
    try {
        
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
            }
        });
        
        console.log('>>> listarAulas >>> ',response.data);

        return response.data;
   
    } catch (error: any) {
        console.error("Erro ao buscar aulas:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};

