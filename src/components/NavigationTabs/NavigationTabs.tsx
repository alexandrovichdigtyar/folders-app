import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { setNotificationMessage } from '../../redux/slices/layout';
import { AppDispatch } from '../../redux/store';
import { RootStackParamList, ScreensList } from '../../types/types';
import { navTabs } from './helpers';
import { styles } from './styles';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(ScreensList.Home);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const dispatch: AppDispatch = useDispatch();

  const onPressTab = (tabName: string) => {
    if (tabName === ScreensList.Folders) {
      navigation.navigate(ScreensList.Folders, { path: '' });
      setActiveTab(tabName);
      return;
    }
    if (tabName === ScreensList.Home) {
      navigation.navigate(ScreensList.Home);
      setActiveTab(tabName);
      return;
    }

    dispatch(setNotificationMessage("Not implemented"));
  }

  return (
    <View style={styles.container}>
      {navTabs.map(({ name, icon }) => (
        <TouchableOpacity key={name} onPress={() => onPressTab(name)}
        >
          <Icon
            name={activeTab === name ? icon.replace('-outline', '') : icon}
            size={30}
            color={activeTab === name ? '#0047ab' : '#808080'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationTabs;
