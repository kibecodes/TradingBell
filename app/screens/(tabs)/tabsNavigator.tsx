import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Alerts from './alerts/alerts';
import More from './more/more';
import Portfolio from './portfolio/portfolio';
import Search from './search/search';
import Watchlist from './watchlist/watchlist';
import RedDot from '../../../src/components/redDot';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const focused = useIsFocused();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0E1629' }}>
      <Tab.Navigator
        initialRouteName="portfolio/portfolio"
        screenOptions={() => ({
          headerTitle: 'Portfolio',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#0f1d36',
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
            borderTopWidth: 0,
          },
          headerStyle: {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: '#0f1d36',
          },
          headerTitleStyle: {
            fontSize: 24,
            color: '#FFFFFF',
          },
          headerBackgroundContainerStyle: { backgroundColor: '#0E1629' },
          tabBarIcon: () => <>{focused && <RedDot />}</>,
        })}>
        <Tab.Screen
          name="portfolio/portfolio"
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
              <AntDesign name="plussquareo" size={28} color="white" />
            ),
            tabBarIcon: () => <Octicons name="stack" size={22} color="white" />,
          }}
        />
        <Tab.Screen
          name="watchlist/watchlist"
          component={Watchlist}
          options={{
            headerTitle: 'Watchlist',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Watchlist',
            tabBarIcon: () => (
              <MaterialIcons name="filter-list" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="search/search"
          component={Search}
          options={{
            headerTitle: 'Search',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Search',
            tabBarIcon: () => (
              <Ionicons name="search-outline" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="alerts/alerts"
          component={Alerts}
          options={{
            headerTitle: 'Alerts',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Alerts',
            tabBarIcon: () => (
              <SimpleLineIcons name="bell" size={22} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="more/more"
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
                color="white"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
