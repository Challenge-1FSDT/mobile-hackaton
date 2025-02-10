export const decodeBase64Token = (token:string) => {
    const base64Payload = token.split('.')[1]; // Pega a parte do payload do token (segunda parte)
    const decodedPayload = atob(base64Payload); // Decodifica a string Base64
    return JSON.parse(decodedPayload); // Converte de volta para um objeto JavaScript
};