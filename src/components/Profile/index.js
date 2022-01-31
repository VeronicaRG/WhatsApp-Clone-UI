import React from 'react';
import {Circle, Container, Name, Qr, Status, View, PhotoQr} from './styles';
import Photo from '../../images/vrg.jpg';
import QrCode from '../../images/qr.png';

const Profile = () => {
  return (
    <Container activeOpacity={0.5}>
      <Circle source={Photo} />
      <View>
        <Name>VRG♡</Name>
        <Status>"Don't be the same, be better"♡</Status>
      </View>
      <Qr>
        <PhotoQr source={QrCode} />
      </Qr>
    </Container>
  );
};

export default Profile;
