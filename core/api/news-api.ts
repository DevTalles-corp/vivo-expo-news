import axios from 'axios';

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': '431a2b39236d43baaafbf67530faa12d',
  },
  params: {
    country: 'us',
    pageSize: 40,
  },
});
