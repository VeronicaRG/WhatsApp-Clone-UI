import React from 'react';
import {Container} from './styles';
import TabBarButton from '../TabBarButton';
import Status from '../../images/TabBarOff/statusTab.png';
import Calls from '../../images/TabBarOff/callsTab.png';
import Camera from '../../images/TabBarOff/cameraTab.png';
import Chats from '../../images/TabBarOff/chatsTab.png';
import Settings from '../../images/TabBarOn/settingsTab.png';
import {useNavigation} from '@react-navigation/native';

const TabBar = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TabBarButton image={Status} />
      <TabBarButton image={Calls} />
      <TabBarButton image={Camera} />
      <TabBarButton
        image={Chats}
        onPress={() => navigation.navigate('Chats')}
      />
      <TabBarButton image={Settings} />
    </Container>
  );
};

export default TabBar;
