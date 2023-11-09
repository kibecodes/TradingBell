import { Button } from "react-native-paper";
import styled from "styled-components";

import { Box } from "../../app/Theme/theme";


export const Container = styled(Box)`
    height: 200px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;


export const SettNews = styled(Box)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;


export const SettingsButton = styled(Button)`
    height: 70px;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    
`;

export const NewsButton = styled(Button)`
    height: 70px;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;  
`;


export const TrialButton = styled(Button)`
    height: 50px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: black;
`;

export const SignInButton = styled(Button)`
    height: 50px;
    width: 100%;
    align-items: flex-start;
    padding: 4px;
    gap: 8px;
    background-color: gray;
`;