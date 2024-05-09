import {api, getToken} from './api';

export async function sendAvaliation(
  requestId: string,
  notaRestaurante: number,
  observacao: string,
  restauranteId: string,
) {
  try {
    const header = await getToken();
    const avaliation = {
      requestId: requestId,
      restaurantId: restauranteId,
      avaliationRestaurant: notaRestaurante,
      observation: observacao,
    };
    const response = await api.post(
      '/avalicacao/restaurante',
      avaliation,
      header,
    );
    return response;
  } catch (e) {
    console.log('avaliação ', e);
    return true;
  }
}
