import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import Alerts from './pages/alerts';
import More from './pages/more';
import Portfolio from './pages/portfolio';
import Search from './pages/search';
import Watchlist from './pages/watchlist';
import store from '../redux/store';

export default function StackScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="pages/portfolio"
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
          name="pages/portfolio"
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
          name="pages/watchlist"
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
          name="pages/search"
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
          name="pages/alerts"
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
          name="pages/more"
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
    </Provider>
  );
}
