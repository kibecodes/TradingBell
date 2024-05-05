import { Image } from 'react-native';
import styled from 'styled-components';

import { Box } from '../../../Theme/theme';

export const ModalContainer = styled(Box)`
  flex: 1;
  height: 100%;
  width: 100%;
  padding-top: 10px;
  align-items: center;
  justify-content: flex-start;
  /* background-color: gray; */
`;
export const ModalSetup = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
export const ModalHeader = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
  /* background-color: blue; */
`;
export const ModalLogo = styled(Box)`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled(Image)`
  height: 90%;
  width: 90%;
  border-radius: 9999px;
`;
export const Graph = styled(Box)`
  height: 60%;
  width: 100%;
  background-color: aliceblue;
`;
