import {RequestSendData} from '../../types/requestData';
import {api, getToken} from './api';

export async function getRequests() {
  try {
    const header = await getToken();
    const userRequests = await api.get('/pedido/cliente', header);
    console.log('all requests', userRequests.data);
    return userRequests.data.content;
  } catch (e) {
    console.log(e);
  }
}
export async function getRequestById(id: string) {
  try {
    const header = await getToken();
    const request = await api.get(`/pedido/status/${id}`, header);
    return request.data.content[0];
  } catch (e) {
    console.log(e);
  }
}
export async function postRequest(order: RequestSendData) {
  try {
    const header = await getToken();
    const userRequests = await api.post('/pedido/fazer', order, header);
    console.log(userRequests.data);
    return userRequests.data.id;
  } catch (e) {
    console.log('post request ', e);
  }
}
