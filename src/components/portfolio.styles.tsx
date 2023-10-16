import { View } from 'react-native';
import styled from 'styled-components';

export const OrderCard = styled(View)`
  height: 80px;
  width: 100%;
  border-radius: 4px;
  background-color: #1d4562;
  text-align: center;
  margin-top: 10px;
  flex-direction: row;
`;
export const OrderLogo = styled(View)`
  height: 50px;
  width: 50px;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: white;
`;
export const Order = styled(View)`
  height: 50px;
  width: 30%;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: green;
`;
export const OrderNumbers = styled(View)`
  height: 50px;
  width: 43%;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: aqua;
`;
