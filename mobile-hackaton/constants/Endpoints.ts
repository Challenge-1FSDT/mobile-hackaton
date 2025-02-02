// Base URL da API
export const BASE_URL = 'https://e9f31d7cd532.ngrok.app/';

// Endpoints específicos
export const ENDPOINTS = {
  LOGIN: `${BASE_URL}auth/login`,
  REGISTER: `${BASE_URL}auth/register`,
  GET_USER: `${BASE_URL}user`,
  GET_LISTAR_ESCOLAS: `${BASE_URL}schools`,
  // Adicione outros endpoints conforme necessário
};