import {users} from '../../mocks/users';
import {api, getToken} from './api';

export async function getAddressById(id: string) {
  try {
    // const header = await getToken();
    // const address = await api.get(`/address/${id}`, header);
    // return address
    const address = users.find(item => item.address[0].addressId === id);
    return address?.address;
  } catch (e) {
    console.log(e);
  }
}
