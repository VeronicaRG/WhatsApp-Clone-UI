import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #ffffff;
  width: 800px;
  height: 80px;
  border: 0.4px solid #c9c8ca;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.Image`
  background: #f5e7b1;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 25px;
`;
export const View = styled.View``;

export const Name = styled.Text`
  font-size: 20px;
  padding-left: 15px;
`;
export const Status = styled.Text`
  color: #7f7d82;
  font-size: 15px;
  padding-top: 5px;
  padding-left: 15px;
`;

export const Qr = styled.View`
  background: #f2f1f5;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  margin-right: 15px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
`;
export const PhotoQr = styled.Image`
  width: 20px;
  height: 20px;
`;
