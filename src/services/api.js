import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29388258-a8364d8d5733147bd409d2c64';

function fetchPicture(name, page) {
  const response = axios.get(
    `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response;
}

const api = { fetchPicture };
export default api;