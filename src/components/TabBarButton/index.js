import React from 'react';
import {OptionTouch, Option} from './styles';

const TabBarButton = ({image, onPress}) => {
  return (
    <OptionTouch onPress={onPress}>
      <Option source={image} />
    </OptionTouch>
  );
};

export default TabBarButton;
