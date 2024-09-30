import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/presentation/hooks/theme/useThemeColor';

interface Props {
  title?: string;
  subTitle: string;
}

const ThemedTitle = ({ title, subTitle }: Props) => {
  const { top } = useSafeAreaInsets();
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={{ marginTop: top + 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Ionicons
          name="newspaper-outline"
          size={32}
          color={textColor}
          style={{ marginBottom: 5 }}
        />
        <ThemedText type="title">{title ?? 'Noticias'}</ThemedText>
      </View>

      <ThemedText type="subtitle" style={{ color: 'grey' }}>
        {subTitle}
      </ThemedText>
    </View>
  );
};
export default ThemedTitle;
