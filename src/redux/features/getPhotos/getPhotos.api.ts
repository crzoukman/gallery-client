import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPhotosApi(collection: number) {
  return axios.get(BASE_URL + `/albums/${collection}/photos`);
}
