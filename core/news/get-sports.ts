import { newsApi } from '../api/news-api';
import { NewsResponse } from '../interfaces/news-interfaces';

export const getSports = async () => {
  try {
    const { data } = await newsApi.get<NewsResponse>(
      '/top-headlines?category=sports'
    );

    return data.articles.filter(
      (article) => article.urlToImage !== null && article.urlToImage !== ''
    );
  } catch (error) {
    throw new Error('Cant load top headlines');
  }
};
