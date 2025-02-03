import axios from './../node_modules/axios';
import { ENDPOINTS } from './../constants/Endpoints';

export const listarEscola = async (token: any) => {
    const url = ENDPOINTS.GET_LISTAR_ESCOLAS;

    console.log('>>> ENDPOINTS.GET_LISTAR_ESCOLAS >>>', url);

    // Este token é de teste e precisa ser trocado diariamente
    //let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODU1MDA4NSwiZXhwIjoxNzM4NjM2NDg1fQ.jhbQRSanUMEWp6TQpzFLTRxOLz-jrklKgfVbcSqS0hcQT3twgnPM2Sl0pHYv11TDLDLpxXz1oKfPOr5q7zwz9MtzIXmTLEIn58CFuL5hTG1-GufyQ_FANHEcf2-8CyNGPk59KICAjxdIs0sAa5uPA9PCOaeXnFyD3jCWPucbdxfbUI-QmB69dCTtvvKmDP5Eoh-PT4dg-SSnL6uD6C75HVRvqg65J3gV6JzbbPthexepKDc0ZES6L8FpRa7sBV2qwkEu8AqSPj3a-47uFIm_jRg9QhBVmCQ75KSxUX_W7EGdw2_Kl0nwpoJZ38E1khqCbrib_HwXLjR3wFuwCwsp7Q';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Formato correto
            }
        });

        return response.data; // Retorna os dados da resposta

    } catch (error: any) {
        console.error("Erro ao buscar escolas:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};
