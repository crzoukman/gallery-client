import axios from 'axios';
import { config } from 'config';

export function getPhotoByIdApi(id: string) {
  return axios.get(config.BASE_URL + `/photos?id=${id}`);
}
