import React from 'react';
import {Container, Group, Text} from './styles';
import Profile from '../../components/Profile';
import Button from '../../components/Button';
import Starred from '../../images/starred.png';
import Linked from '../../images/linked.png';
import Account from '../../images/account.png';
import Chats from '../../images/chats.png';
import Notifications from '../../images/notifications.png';
import Payments from '../../images/payments.png';
import Storage from '../../images/storage.png';
import Help from '../../images/help.png';
import Heart from '../../images/heart.png';
import TabBar from '../../components/TabBar';
//import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  //const navigation = useNavigation();

  return (
    <Container>
      <Text>Settings</Text>
      <Profile />
      <Group>
        <Button photo={Starred} text="Starred Messages" />
        <Button photo={Linked} text="Linked Devices" />
      </Group>
      <Group>
        <Button photo={Account} text="Account" />
        <Button
          photo={Chats}
          text="Chats"
          //onPress={() => navigation.navigate('Chats')}
        />
        <Button photo={Notifications} text="Notifications" />
        <Button photo={Payments} text="Payments" />
        <Button photo={Storage} text="Storage and Data" />
      </Group>
      <Group>
        <Button photo={Help} text="Help" />
        <Button photo={Heart} text="Tell a Friend" />
      </Group>
      <Group />
      <TabBar />
    </Container>
  );
};

export default Settings;
