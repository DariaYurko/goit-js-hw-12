import axios from 'axios';
import { perPage } from '../main';

/**
 *
 * @param {String} query
 * @returns {Object}
 */
export async function sendQuery(imageName, pageNumber) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44349742-ecc8a7b60aea5585f0c207813',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: pageNumber,
  };

  try {
    const response = await axios.get('/api/', { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
