import {orders} from '../../mocks/orders';

export async function getOrders() {
  try {
    const thisOrders = orders;
    return thisOrders;
  } catch (e) {
    console.log(e);
  }
}
