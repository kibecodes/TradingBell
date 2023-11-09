import { Image } from 'react-native';
import styled from 'styled-components';

import { Box } from '../../../Theme/theme';

export const OrderCard = styled(Box)`
  height: 70px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  
`;
export const OrderLogo = styled(Box)`
  height: 50px;
  width: 50px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 4px;
  background-color: #0f1d36;
`;
export const LogoImage = styled(Image)`
  height: 60%;
  width: 60%;
  border-radius: 9999px;
  position: relative;
`;
export const OverlayLogoImage = styled(Image)`
  height: 60%;
  width: 60%;
  border-radius: 9999px;
  position: absolute;
  top: 0;
  right: 0;
` ;
export const CompanyLogo = styled(Image)`
  height: 90%;
  width: 90%;
  border-radius: 9999px;
`;
export const Order = styled(Box)`
  height: 50px;
  width: 30%;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: flex-start;
  justify-content: center;
`;
export const OrderNumbers = styled(Box)`
  height: 50px;
  width: 43%;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 10px;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
`;
export const PriceIndicator = styled(Image)`
  height: 15px;
  width: 15px;
`