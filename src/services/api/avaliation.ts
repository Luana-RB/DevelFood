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
