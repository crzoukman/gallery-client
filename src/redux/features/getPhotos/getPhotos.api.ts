import axios from 'axios';
import { config } from 'config';

export function getPhotosApi(collection: number) {
  const page = localStorage.getItem('gallery-current-page');

  return axios.get(
    config.BASE_URL +
      `/albums/${collection}/photos?_start=${page ?? 0}&_limit=${config.FETCHING_ITEMS_LIMIT}`,
  );
}
