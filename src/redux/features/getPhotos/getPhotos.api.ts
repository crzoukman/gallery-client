import axios from 'axios';
import { config } from 'config';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPhotosApi(collection: number) {
  const page = localStorage.getItem('gallery-current-page');

  console.log('fetcing page... ', page);

  return axios.get(
    BASE_URL +
      `/albums/${collection}/photos?_start=${page ?? 0}&_limit=${config.FETCHING_ITEMS_LIMIT}`,
  );
}
