import {api, getToken} from './api';

export async function sendAvaliation(
  notaRestaurante: number,
  observacao: string,
  restauranteId: string,
) {
  try {
    const header = await getToken();
    const avaliation = {
      restauranteId: restauranteId,
      notaRestaurante: notaRestaurante,
      observacao: observacao,
    };
    console.log(avaliation);
    const response = await api.post(
      '/avalicacao/restaurante',
      avaliation,
      header,
    );
    // const response = `${restaurantId}: ${avaliation.grade} ${avaliation.comment}`;

    return response;
  } catch (e) {
    console.log('avaliação ', e);
    return true;
  }
}
