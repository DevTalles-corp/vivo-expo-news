import { getSports } from '@/core/news/get-sports';
import { getTopHeadlines } from '@/core/news/get-top-headlines';
import { useQuery } from '@tanstack/react-query';

export const useNews = () => {
  const topHeadlinesQuery = useQuery({
    queryKey: ['top-headlines', { page: 1 }],
    queryFn: getTopHeadlines,
  });

  const sportsQuery = useQuery({
    queryKey: ['sports-headlines', { page: 1 }],
    queryFn: getSports,
  });

  return {
    topHeadlinesQuery,
    sportsQuery,
  };
};
