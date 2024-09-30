import ArticleCard from '@/presentation/components/news/ArticleCard';
import { ThemedText } from '@/presentation/components/shared/ThemedText';
import ThemedTitle from '@/presentation/components/shared/ThemedTitle';
import { useNews } from '@/presentation/hooks/news/useNews';
import { FlatList } from 'react-native';
const SportsScreen = () => {
  const { sportsQuery } = useNews();

  const firstArticle = sportsQuery.data?.[0];
  const articles = sportsQuery.data?.slice(1);

  return (
    <FlatList
      style={{ marginHorizontal: 10 }}
      // data={sportsQuery.data ?? []}
      showsVerticalScrollIndicator={false}
      data={articles ?? []}
      numColumns={2}
      ListHeaderComponent={() => (
        <>
          <ThemedTitle subTitle={'Septiembre 30'} />
          <ThemedText type="subtitle" style={{ marginTop: 40 }} isPrimary>
            Últimas noticias
          </ThemedText>
          <ThemedText type="small" style={{ color: 'grey', marginBottom: 20 }}>
            Noticias escogidas por editores de Apple News{' '}
          </ThemedText>

          <ArticleCard article={firstArticle!} isHalfWidth={false} />
        </>
      )}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <ArticleCard article={item} />}
    />
  );
};
export default SportsScreen;