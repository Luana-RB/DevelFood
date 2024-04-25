import {requests} from '../../mocks/requests';
import {RequestSendData} from '../../types/requestData';

export async function getRequests() {
  try {
    //const header = await getToken();
    // const userRequests = await api.get('/cliente/pedidos', header)
    const userOrders = requests;
    return userOrders;
  } catch (e) {
    console.log(e);
  }
}
export async function getRequestById(id: string) {
  try {
    //const header = await getToken();
    // const request = await api.get(`/cliente/pedidos/${id}`, header)
    const request = requests[0];
    return request;
  } catch (e) {
    console.log(e);
  }
}
export async function postRequest(order: RequestSendData) {
  try {
    //const header = await getToken();
    // const userRequests = await api.post('/cliente/pedidos', order, header)
    const userOrders = requests;
    return userOrders[0].id;
  } catch (e) {
    console.log(e);
  }
}
