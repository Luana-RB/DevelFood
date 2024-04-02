export function formatDescription({data}: any) {
  const text = data.description;
  const words = text.split(' ');
  const firstWords = words.slice(0, 20);
  const newDescription = firstWords.join(' ');
  return newDescription;
}

export function formatImage({data}: any) {
  if (data) {
    if (!!data.fotos) {
      return {uri: data.fotos};
    } else {
      return require('../../assets/images/notFound.png');
    }
  }
}
