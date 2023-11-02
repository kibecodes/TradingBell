import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('HomeScreen')}
                title="Go to HomeScreen"
            />
        </View>
    );
};

const Notification = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to Notifications"
            />
        </View>
    );
};

const Drawer = createDrawerNavigator();

export default function LayoutDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name="Notification" component={Notification}/>
        </Drawer.Navigator>
    ); 
};