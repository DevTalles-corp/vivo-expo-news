import { useThemeColor } from '@/presentation/hooks/theme/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: primaryColor,
      }}
    >
      <Tabs.Screen
        name="(today)/index"
        options={{
          title: 'Hoy',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="newspaper-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news/index"
        options={{
          title: 'Noticias',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="id-card-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sports/index"
        options={{
          title: 'Deportes',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="football-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="following/index"
        options={{
          title: 'Siguiendo',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="list-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
