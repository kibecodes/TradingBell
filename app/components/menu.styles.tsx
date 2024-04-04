import { Pressable } from 'react-native';
import styled from 'styled-components';

import { Box } from '../Theme/theme';

export const Container = styled(Box)`
  height: 40%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  margin-bottom: 30px;
`;
export const SettNews = styled(Box)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  gap: 15px;
`;
export const SettingsButton = styled(Pressable)`
  height: 70px;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 16px;
`;
export const NewsButton = styled(Box)`
  height: 70px;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 16px;
`;
export const TrialButton = styled(Box)`
  height: 50px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
`;
export const UpgradeButton = styled(Box)`
  height: 70%;
  width: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const SignInButton = styled(Pressable)`
  height: 50px;
  width: 100%;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  padding: 4px;
  padding-left: 16px;
  border-radius: 16px;
`;

export const CenterContainer = styled(Box)`
  height: 100px;
  width: 100%;
  padding: 10px;
  padding-top: 0%;
  padding-bottom: 0%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
export const Brokers = styled(Box)`
  height: 50%;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FlexStart = styled(Box)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
`;
export const Theme = styled(Pressable)`
  height: 50%;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FlexEnd = styled(Box)`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 12px;
`;

export const BottomContainer = styled(Box)`
  height: 100px;
  width: 100%;
  padding: 10px;
  padding-top: 0%;
  padding-bottom: 0%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Media = styled(Box)`
  height: 50%;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Stickers = styled(Box)`
  height: 50%;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const About = styled(Box)`
  height: 50%;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
