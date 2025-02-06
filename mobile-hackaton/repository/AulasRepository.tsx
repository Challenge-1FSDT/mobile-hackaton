import axios from './../node_modules/axios';
import { ENDPOINTS } from './../constants/Endpoints';
import { useEscolaEscolhida } from '@/provider/EscolaEscolhidaContext';

/*
const getCurrentDateRange = () => {
    const now = new Date();

    // `startAt` com o início do dia atual (00:00:00.000Z)
    const startAt = new Date(now);
    startAt.setUTCHours(0, 0, 0, 0);

    // `endAt` com o final do dia atual (23:59:59.999Z)
    const endAt = new Date(now);
    endAt.setUTCHours(23, 59, 59, 999);

    return {
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
    };
};*/
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
        endAt: endAt.toISOString(),
    };
};


export const listarAulas = async (token: any, idEscola: any) => {
    
    console.log('Id da Escola escolhida: '+idEscola);
    const url = ENDPOINTS.GET_AULAS+`${idEscola}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
            },
            data: getCurrentDateRange(), // Corpo da requisição (payload)
        });

        return response.data; // Retorna os dados da resposta

    } catch (error: any) {
        console.error("Erro ao buscar escolas:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};

