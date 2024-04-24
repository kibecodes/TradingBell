import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Feather,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Pressable } from 'react-native';

import Chart from './charts/chart';
import Explore from './explore/explore';
import Ideas from './ideas/ideas';
import Menu from './menu/menu';
import Watchlist from './watchlist/watchlist';
import { useTheme } from '../../Theme/theme';
import { useColorScheme } from '../../components/ColorSchemeContext';
import RedDot from '../../components/redDot';

export default function TabNavigator() {
  const { colorScheme, toggle } = useColorScheme();
  const router = useRouter();
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  const focused = useIsFocused();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <Tab.Navigator
        initialRouteName="watchlist/watchlist"
        screenOptions={() => ({
          tabBarActiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.grayText,
          tabBarStyle: {
            backgroundColor: theme.colors.mainForeground,
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
            borderTopWidth: 0,
          },
          headerStyle: {
            height: 120,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: theme.colors.mainBackground,
          },
          headerTitleStyle: {
            fontSize: 24,
            color: theme.colors.white,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: theme.colors.mainBackground,
          },
          tabBarIcon: () => <>{focused && <RedDot />}</>,
        })}
      >
        <Tab.Screen
          name="watchlist/watchlist"
          component={Watchlist}
          options={{
            headerTitle: 'Watchlist',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Watchlist',
            headerStyle: {
              height: 120,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              backgroundColor: theme.colors.mainForeground,
            },
            headerRightContainerStyle: {
              paddingRight: 16,
            },
            headerLeftContainerStyle: {
              paddingLeft: 16,
            },
            headerRight: () => (
              <AntDesign
                name="plussquareo"
                size={28}
                color={theme.colors.white}
                onPress={() => router.push('/home/populate')}
              />
            ),
            headerLeft: () => (
              <Ionicons
                name="menu-outline"
                size={24}
                color={theme.colors.white}
                onPress={() => router.push('/home/welcome')}
              />
            ),
            tabBarIcon: () => (
              <AntDesign name="star" size={22} color={theme.colors.white} />
            ),
          }}
        />
        <Tab.Screen
          name="charts/chart"
          component={Chart}
          options={{
            headerTitle: 'Chart',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Chart',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                size={24}
                color={theme.colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="explore/explore"
          component={Explore}
          options={{
            headerTitle: 'Explore',
            headerTitleAlign: 'left',
            headerShown: true,
            tabBarLabel: 'Explore',
            tabBarIcon: () => (
              <MaterialIcons
                name="explore"
                size={24}
                color={theme.colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ideas/ideas"
          component={Ideas}
          options={{
            headerTitle: 'Ideas',
            headerTitleAlign: 'left',
            headerShown: true,
            // headerStyle: {
            //   height: 120,
            //   borderBottomLeftRadius: 12,
            //   borderBottomRightRadius: 12,
            // },
            tabBarLabel: 'Ideas',
            tabBarIcon: () => (
              <Ionicons
                name="bulb-outline"
                size={22}
                color={theme.colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="menu/menu"
          component={Menu}
          options={{
            headerTitle: 'Menu',
            headerTitleAlign: 'left',
            headerRightContainerStyle: {
              paddingRight: 16,
            },
            headerRight: () => (
              <Pressable onPress={() => toggle()}>
                <Feather
                  name={colorScheme === 'light' ? 'moon' : 'sun'}
                  color={theme.colors.white}
                  size={28}
                />
              </Pressable>
            ),
            headerShown: true,
            headerStyle: {
              height: 120,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              backgroundColor: theme.colors.mainForeground,
            },
            tabBarLabel: 'Menu',
            tabBarIcon: () => (
              <Ionicons name="menu" size={24} color={theme.colors.white} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
