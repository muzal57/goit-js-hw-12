import axios from 'axios';

const API_KEY = '49874649-8c00636039374d469a712b585';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  };

  const response = await axios.get(BASE_URL, searchParams);
  return response.data;
}
