import {api, getToken} from './api';

export async function getSales() {
  try {
    const header = await getToken();
    const response = await api.get('/restaurante/promocoes', header);
    console.log(response.data);
    return response.data.content;
  } catch (e) {
    console.log('avaliação ', e);
    return true;
  }
}
