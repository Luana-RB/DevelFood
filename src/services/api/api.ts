import axios from 'axios';
import {useToken} from '../context/tokenContext';

export const api = axios.create({
  baseURL: 'https://open-phoenix-secondly.ngrok-free.app',
});

export function getToken() {
  const {token} = useToken();
  const header = {
    Authorization: `Bearer ${token}`,
  };
  return header;
}
