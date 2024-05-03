import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: 'https://social-neutral-jaybird.ngrok-free.app',
});

export async function getToken() {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return header;
  }
}
