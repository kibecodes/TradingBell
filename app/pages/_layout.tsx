import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Alerts from './alerts';
import More from './more';
import Portfolio from './portfolio';
import Search from './search';
import Watchlist from './watchlist';

export default function stackScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="portfolio"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Portfolio',
          tabBarIcon: () => <Octicons name="stack" size={22} color="black" />,
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Watchlist',
          tabBarIcon: () => (
            <MaterialIcons name="filter-list" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Alerts',
          tabBarIcon: () => (
            <SimpleLineIcons name="bell" size={22} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'More',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="dots-horizontal-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
