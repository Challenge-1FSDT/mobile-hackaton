import { getCheckinEndpoint } from './../constants/Endpoints';
import axios from './../node_modules/axios';

export const salvarCheckinOuCheckOut = async (token: any, idAluno: any, idAula: any) => {

    const url = getCheckinEndpoint(idAluno, idAula);

    console.log(' >>> salvarCheckinOuCheckOut.token >>> '+url);

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Formato correto
            }
        });

        //console.log('>>> salvarCheckinOuCheckOut >>> ',response);
        return response.data; // Retorna os dados da resposta

    } catch (error: any) {
        //console.error("Erro ao realizar o Checkin ou Checkout:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message);
    }
};
