// Base URL da API
export const BASE_URL = 'https://api.learn-on.app/';


// Função para gerar o endpoint de Check-in
export const getCheckinEndpoint = (lectureId: number, schoolId: number): string => {
  return `${BASE_URL}lectures/${lectureId}/attendances?schoolId=${schoolId}`;
};

// Endpoints específicos
export const ENDPOINTS = {
  LOGIN: `${BASE_URL}auth/login`,
  REGISTER: `${BASE_URL}auth/register`,
  GET_USER: `${BASE_URL}user`,
  GET_LISTAR_ESCOLAS: `${BASE_URL}schools`,
  GET_AULAS:  `${BASE_URL}lectures?schoolId=`,
  // Adicione outros endpoints conforme necessário
};