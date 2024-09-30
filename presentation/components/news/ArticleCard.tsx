import { Article } from '@/core/interfaces/news-interfaces';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { ThemedText } from '../shared/ThemedText';
import { LocaleStrings } from '@/helpers/locale-strings';

import { openBrowserAsync } from 'expo-web-browser';

interface Props {
  article: Article;
  isHalfWidth?: boolean;
}

const ArticleCard = ({ article, isHalfWidth = true }: Props) => {
  const { width } = useWindowDimensions();
  const cardWidth = isHalfWidth ? width / 2 - 15 : width - 20;

  return (
    <View
      style={{
        width: cardWidth,
        paddingHorizontal: 10,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={async () => {
          // Linking.openURL(article.url);

          if (Platform.OS !== 'web') {
            // Open the link in an in-app browser.
            await openBrowserAsync(article.url);
          }
        }}
      >
        <Image
          source={{ uri: article.urlToImage! }}
          style={{
            width: '100%',
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <ThemedText type="defaultSemiBold">{article.source.name}</ThemedText>

      <ThemedText>{article.title}</ThemedText>

      {/* Publicada en */}
      <ThemedText style={{ marginTop: 5, color: 'grey' }}>
        hace {LocaleStrings.timeSince(article.publishedAt)}
      </ThemedText>
    </View>
  );
};
export default ArticleCard;
