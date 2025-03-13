import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/', // o lo puedes importar desde endpoints.ts
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;