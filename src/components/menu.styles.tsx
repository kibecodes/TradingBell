import styled from "styled-components";

import { Box } from "../../app/Theme/theme";


export const Container = styled(Box)`
    height: 40%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 20px;
    /* background-color: blue; */
`;


export const SettNews = styled(Box)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    gap: 15px;
    /* background-color: red; */
`;


export const SettingsButton = styled(Box)`
    height: 70px;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding-left: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 16px;
    /* background-color: cyan; */
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
    /* background-color: saddlebrown; */
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
    /* background-color: green; */
`;

export const UpgradeButton = styled(Box)`
    height: 70%;
    width: 40%;
    align-items: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* background-color: yellow; */

`;

export const SignInButton = styled(Box)`
    height: 50px;
    width: 100%;
    align-items: center;
    gap: 12px;
    flex-direction: row;
    padding: 4px;
    padding-left: 16px;
    border-radius: 16px;
    /* background-color: gray; */
`;