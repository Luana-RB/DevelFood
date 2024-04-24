import {orders} from '../../mocks/orders';
import {OrderData} from '../../types/orderData';

export async function getRequests() {
  try {
    const userOrders = orders;
    return userOrders;
  } catch (e) {
    console.log(e);
  }
}
export async function postRequest(order: OrderData) {
  try {
    const userOrders = orders;
    return userOrders[0].id;
  } catch (e) {
    console.log(e);
  }
}
