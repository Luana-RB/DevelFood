import {orders} from '../../mocks/orders';

export async function getOrders() {
  try {
    const userOrders = orders;
    return userOrders;
  } catch (e) {
    console.log(e);
  }
}
