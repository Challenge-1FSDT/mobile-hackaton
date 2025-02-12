import axios from './../node_modules/axios';
import { ENDPOINTS } from './../constants/Endpoints';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';
import moment from 'moment';

const getCurrentDateRange = () => {

    /*
    const now = new Date();
    console.log(now);
    // Data de início do dia
    const startAt = new Date(now);
    startAt.setHours(0, 0, 0, 0);

    // Data de final do dia
    const endAt = new Date(now);
    endAt.setHours(23, 59, 0, 0);

    return {
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString()
    };*/
    const now = moment();

    // Data de início do dia (em hora local)
    const startAt = now.clone().subtract(1, 'days').startOf('day');

    // Data de final do dia (em hora local)
    const endAt = now.clone().endOf('day');

    return {
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString()
    };
};

export const listarAulas = async (token: string, idEscola: any) => {

    const {startAt, endAt} = getCurrentDateRange();

    //const url = ENDPOINTS.GET_AULAS+idEscola+'&startAt='+startAt+'&endAt='+endAt;
    const url = `${ENDPOINTS.GET_AULAS}${idEscola}&startAt=${startAt}&endAt=${endAt}`;
    
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

