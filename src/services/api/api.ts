import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://open-phoenix-secondly.ngrok-free.app',
});
