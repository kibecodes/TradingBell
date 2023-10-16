import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Alerts from './pages/alerts';
import More from './pages/more';
import Portfolio from './pages/portfolio';
import Search from './pages/search';
import Watchlist from './pages/watchlist';

export default function stackScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Portfolio"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerStyle: {
          backgroundColor: 'red',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12
        },
        headerTitleStyle: {
          fontSize: 24,
          color: 'black'
        },
      }}>
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerRight: () => (
            <AntDesign name="plussquareo" size={28} color="black" />
          ),
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
