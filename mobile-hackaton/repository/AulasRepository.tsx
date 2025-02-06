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
    console.log(` >>> listarAulas >>> ${token} <<< `);
    const url = ENDPOINTS.GET_AULAS+`${idEscola}`;

    //const teste = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODgxMTEwMywiZXhwIjoxNzM4ODk3NTAzfQ.gFZOtVlaTSoIDSNlMWP11em3_08ydWNbOOPq9tSWIKMsZ8nZPoFkmjn6GmSLxg5jgYFvaEN4g6qVqXHBta0adc6BoDqG6zC6NqedizAYuffaNnyGH7Ug28quuEv6vwIxpyBdop0JBiMLTs2GR1J76Bm_EKALB8gqGXRRX2QKupEj1yjbohmoTtSDd4FRwD-Ney1zIPCTSADhhGlvid_TKU44xV6fDe1bwGG_LXPktR2GkmAv1g3G58zyvzUj5jdzQgl2UuFWCNixjFnFBE6VIE6E2LQwhGq7TRopfGRaqj8C96dLl_qmt_wbh-CAGzUpmAaijOQKFg5sxTTWtYi8oA'
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

