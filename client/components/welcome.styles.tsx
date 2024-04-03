import { Button } from 'react-native-paper';
import { styled } from 'styled-components';

import { Text } from '../app/Theme/theme';

export const Title = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const SignText = styled(Text)`
  text-align: center;
  font-size: 12px;
`;

export const GoogleLinkButton = styled(Button)`
  height: 5em;
  width: 100%;
  padding: 4px;
  background-color: white;
  align-items: flex-start;
`;

export const LinkButton = styled(Button)`
  height: 5em;
  width: 10%;
  padding: 0px;
  background-color: white;
  text-align: center;
`
export const EmailButton = styled(Button)`
  height: 3/4;
  width: 100%;
  padding: 4px;
  background-color: white;
  text-align: center;
  align-items: flex-start;
`