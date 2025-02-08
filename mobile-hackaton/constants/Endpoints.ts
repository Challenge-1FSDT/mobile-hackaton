// Base URL da API
export const BASE_URL = 'https://api.learn-on.app/';

// Endpoints específicos
export const ENDPOINTS = {
  LOGIN: `${BASE_URL}auth/login`,
  REGISTER: `${BASE_URL}auth/register`,
  GET_USER: `${BASE_URL}user`,
  GET_LISTAR_ESCOLAS: `${BASE_URL}schools`,
  GET_AULAS:  `${BASE_URL}lectures?schoolId=`,
  // Adicione outros endpoints conforme necessário
};