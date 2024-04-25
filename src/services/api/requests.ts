import {requests} from '../../mocks/requests';
import {RequestSendData} from '../../types/requestData';

export async function getRequests() {
  try {
    const userOrders = requests;
    return userOrders;
  } catch (e) {
    console.log(e);
  }
}
export async function postRequest(order: RequestSendData) {
  try {
    const userOrders = requests;
    return userOrders[0].id;
  } catch (e) {
    console.log(e);
  }
}
