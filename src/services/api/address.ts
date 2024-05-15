import {UserData} from '../../types/userData';
import {api, getToken} from './api';

export async function getAddressById() {
  try {
    const header = await getToken();
    const address = await api.get(`/endereco/cliente`, header);
    console.log('chamada', address.data.content[0].address);
    return address.data.content[0].address;
  } catch (e) {
    console.log('endereço', e);
  }
}

export async function patchUserAddress(newUserData: UserData) {
  try {
    const newAddress = {
      addressName: newUserData.address[0].addressName,
      street: newUserData.address[0].street,
      state: newUserData.address[0].state,
      number: newUserData.address[0].number,
      neighbourhood: newUserData.address[0].neighbourhood,
      city: newUserData.address[0].city,
      cep: newUserData.address[0].cep,
    };
    const id = newUserData.address[0].addressId;
    const header = await getToken();
    const response = await api.put(
      `/endereco/cliente/${id}`,
      newAddress,
      header,
    );
    if (response.status === 200) return true;
  } catch (e) {
    console.log('patch address ', e);
  }
}
