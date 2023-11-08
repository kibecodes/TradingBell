import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconButton } from './IconButton';
import { useTheme, Box, Text } from '../../app/Theme/theme';

export const Header = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <View>
      <View
        style={{
          marginTop: insets.top,
          padding: theme.spacing.m,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Box flexDirection="row">
          <Text variant="header" marginLeft="s">
                TradingBell
          </Text>
        </Box>
        <Box flexDirection="row">
          <IconButton icon="edit" />
          <Box marginLeft="s" />
          <IconButton icon="settings" onPress={() => navigation.openDrawer()} />
        </Box>
      </View>
    </View>
  );
};
