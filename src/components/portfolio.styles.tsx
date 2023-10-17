import { View } from 'react-native';
import styled from 'styled-components';

export const OrderCard = styled(View)`
  height: 80px;
  width: 100%;
  border-radius: 5px;
  background-color: #0f1d36;
  text-align: center;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;
export const OrderLogo = styled(View)`
  height: 50px;
  width: 50px;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Order = styled(View)`
  height: 50px;
  width: 30%;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: flex-start;
  justify-content: center;
`;
export const OrderNumbers = styled(View)`
  height: 50px;
  width: 43%;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 10px;
`;
