import { useThemeColor } from '@/presentation/hooks/theme/useThemeColor';
import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  isPrimary?: boolean;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'small';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  isPrimary,
  ...rest
}: ThemedTextProps) {
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  );
  const primaryColor = useThemeColor({}, 'primary');

  const color = isPrimary ? primaryColor : textColor;

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  small: {
    fontSize: 12,
    lineHeight: 12,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
