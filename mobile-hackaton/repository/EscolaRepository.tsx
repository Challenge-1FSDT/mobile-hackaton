import axios from './../node_modules/axios';
import { ENDPOINTS } from './../constants/Endpoints';

export const listarEscola = async () => {
    const url = ENDPOINTS.GET_LISTAR_ESCOLAS;

    console.log('>>> ENDPOINTS.GET_LISTAR_ESCOLAS >>>', url);

    // Este token é de teste e precisa ser trocado diariamente
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODQ2MjgzOSwiZXhwIjoxNzM4NTQ5MjM5fQ.S_Nrlp7XB71_mD8HR_i7kyNzuvl_z57R2wqK6wqecfu1CLlg95tPbYvUSTUHvcsjAK1QentR5SnQgDbORGboJh_1GrDhyX8RPKPQmZ9LDT34cIWpZU-l50ssqwFJuiv3xfuxnrm_PBzNVKT0VVaj1f1ZBkgh7b1a3xhbTswKmlIzawFElum35_rxuM344MF3QGZephhJkUvH2T0lH-GTA0R5wfnGrPd9Og67uF_BzP0VEi6xhwPnyG8CpgSFFa6Q0sNWtN8vsZD0-xgqZ10Hf2dOcqRO46SjihCdFjm9ZcoKHfkRfno1ySTJk4o7Vk3TOMPYa8cU7NPnK8Ks8LKXhA';

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
