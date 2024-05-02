import {api, getToken} from './api';

export async function sendAvaliation(
  grade: number,
  comment: string,
  requestId: string,
) {
  try {
    const header = await getToken();
    const avaliation = {
      requestId,
      grade,
      comment,
    };
    console.log(avaliation);
    console.log(header);
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
