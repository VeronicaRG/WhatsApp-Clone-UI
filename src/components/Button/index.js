import React from 'react';
import {Container, Logo, Text, Arrow, PhotoArrow} from './styles';
import ArrowPhoto from '../../images/arrow.png';

const Button = ({text, photo, onPress}) => {
  return (
    <Container onPress={onPress} activeOpacity={0.5}>
      <Logo source={photo} />
      <Text>{text}</Text>
      <Arrow>
        <PhotoArrow source={ArrowPhoto} />
      </Arrow>
    </Container>
  );
};

export default Button;
