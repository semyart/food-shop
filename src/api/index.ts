import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.jsonkeeper.com'
});

export default apiClient;
