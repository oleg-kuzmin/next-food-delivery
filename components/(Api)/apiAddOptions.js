export default async function apiAddOptions(address) {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = '08ea3029de6e4a071df89cb698783165969ed2dd';
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: address }),
  };
  return await fetch(url, options)
    .then(response => response.text())
    .then(result => JSON.parse(result).suggestions)
    .catch(error => console.log('error', error));
}
