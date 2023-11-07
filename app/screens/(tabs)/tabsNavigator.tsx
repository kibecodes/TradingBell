import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused  } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Alerts from './alerts/alerts';
import More from './more/more';
import Portfolio from './portfolio/portfolio';
import Search from './search/search';
import Watchlist from './watchlist/watchlist';
import RedDot from '../../../src/components/redDot';
import { useTheme } from '../../../src/components/theme';


export default function TabNavigator() {
  const router = useRouter();
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  const focused = useIsFocused();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Tab.Navigator
        initialRouteName="portfolio/portfolio"
        screenOptions={() => ({
          tabBarActiveTintColor: theme.colors.mainForeground,
          tabBarStyle: {
            backgroundColor: theme.colors.secondaryBackground,
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
            borderTopWidth: 0,
          },
          headerStyle: {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            // backgroundColor: theme.colors.secondaryBackground,
            backgroundColor: 'red'
          },
          headerTitleStyle: {
            fontSize: 24,
            color: theme.colors.mainForeground,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: theme.colors.mainBackground,
          },
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
            headerStyle:{
              height: 120,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            },
            headerRightContainerStyle: {
              paddingRight: 16,
            },
            headerLeftContainerStyle: {
              paddingLeft: 16,
            },
            headerRight: () => (
              <AntDesign name="plussquareo" size={28} color="black" onPress={() => router.push('/home/welcome')} />
            ),
            headerLeft: () => (
              <Ionicons name="menu-outline" size={24} color="black" onPress={() => router.push('/home/welcome')} />
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
