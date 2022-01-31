import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #ffffff;
  width: 100%;
  height: 45px;
  border: 0.4px solid #c9c8ca;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  background: #ffff;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-left: 25px;
`;

export const Text = styled.Text`
  font-size: 15px;
  padding-left: 15px;
  flex: 1;
`;
export const Arrow = styled.View`
  background: #ffff;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;
export const PhotoArrow = styled.Image`
  width: 5px;
  height: 10px;
`;
