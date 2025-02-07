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
        endAt: endAt.toISOString(),
    };
};

export const listarAulas = async (token: string, idEscola: any) => {

    const url = ENDPOINTS.GET_AULAS+idEscola;

    try {
        /*
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
            },

            params: {
                "startAt": "2025-01-01T00:00:00.00Z",
                "endAt": "2025-12-31T00:00:00.00Z"
            }//getCurrentDateRange(), // Corpo da requisição (payload)
            
        });
        */

        return (
            {"data":
                [
                    {"id":1,"name":"DEBUG","startAt":"2025-01-26T23:40:00.000Z","endAt":"2025-01-27T00:00:00.000Z"},
                    {"id":2,"name":"DEBUG","startAt":"2025-02-03T23:00:00.000Z","endAt":"2025-02-04T00:00:00.000Z"},
                    {"id":3,"name":"ANDERSON DA SILVA MACHADO","startAt":"2025-02-06T00:33:04.055Z","endAt":"2025-02-06T00:33:04.055Z"},
                    {"id":4,"name":"BANCO DE DADOS","startAt":"2025-02-06T00:33:04.055Z","endAt":"2025-02-06T00:33:04.055Z"}
                ]
            }); //await response.json(); // Retorna os dados da resposta

    } catch (error: any) {
        console.error("Erro ao buscar aulas:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};

