import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import FoldersScreen from "../../screens/Folders/Folders";
import Home from "../../screens/Home/Home";
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import NotificationModal from '../NotificationModal/NotificationModal';
import { ScreensList } from '../../types/types';

const Navigator = () => {
    const Stack = createStackNavigator();
    const notificationMessage = useSelector((state: AppState) => state.layout.notificationMessage);

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name={ScreensList.Home}
                    component={Home}
                />
                <Stack.Screen name={ScreensList.Folders} component={FoldersScreen} initialParams={{ path: '/' }} />
            </Stack.Navigator>
            <NavigationTabs />
            {notificationMessage && (
                <NotificationModal />
            )}
        </NavigationContainer>
    );
}

export default Navigator;