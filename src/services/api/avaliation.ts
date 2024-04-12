import {api} from './api';

export function sendAvaliation(
  score: number,
  comment: string,
  restaurantId: string,
) {
  try {
    const avaliation = {
      score,
      comment,
    };
    // const response = api.post(`${restaurantId}`, avaliation);
    const response = `${restaurantId}: ${avaliation.score} ${avaliation.comment}`;

    return response;
  } catch (e) {
    console.log(e);
  }
}
