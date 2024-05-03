import {requests} from '../../mocks/requests';
import {RequestSendData} from '../../types/requestData';
import {api, getToken} from './api';

export async function getRequests() {
  try {
    const header = await getToken();
    const userRequests = await api.get('/pedido/cliente', header);
    // const userOrders = requests;
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
    // const request = requests.find(item => item.id === id);
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
    // const userOrders = requests;
    // return userOrders[0].id;
  } catch (e) {
    console.log('post request ', e);
  }
}
