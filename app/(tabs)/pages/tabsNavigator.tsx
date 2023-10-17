import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Alerts from './alerts';
import More from './more';
import Portfolio from './portfolio';
import Search from './search';
import Watchlist from './watchlist';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="portfolio"
      screenOptions={{
        headerTitle: 'Portfolio',
        tabBarActiveTintColor: 'blue',
        headerStyle: {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        },
        headerTitleStyle: {
          fontSize: 24,
          color: 'black',
        },
      }}>
      <Tab.Screen
        name="portfolio"
        component={Portfolio}
        options={{
          headerTitle: 'Portfolio',
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Portfolio',
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerRight: () => (
            <AntDesign name="plussquareo" size={28} color="black" />
          ),
          tabBarIcon: () => <Octicons name="stack" size={22} color="black" />,
        }}
      />
      <Tab.Screen
        name="watchlist"
        component={Watchlist}
        options={{
          headerTitle: 'Watchlist',
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Watchlist',
          tabBarIcon: () => (
            <MaterialIcons name="filter-list" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerTitle: 'Search',
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="alerts"
        component={Alerts}
        options={{
          headerTitle: 'Alerts',
          headerTitleAlign: 'left',
          headerShown: true,
          tabBarLabel: 'Alerts',
          tabBarIcon: () => (
            <SimpleLineIcons name="bell" size={22} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          headerTitle: 'More',
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
