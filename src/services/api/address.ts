import {users} from '../../mocks/users';
import {api, getToken} from './api';

export async function getAddressById() {
  try {
    const header = await getToken();
    const addressData = await api.get('/endereco/cliente', header);
    console.log(addressData.data);
    return addressData.data.content[0].address;

    // const address = users.find(item => item.address[0].addressId === id);
    // return address?.address;
  } catch (e) {
    console.log('endereço', e);
  }
}
