import { AntDesign } from '@expo/vector-icons';
import React from "react";

import { Graph, Logo, ModalContainer, ModalHeader, ModalLogo } from "./modal.styles";
import { Text, Box, useTheme } from "../../Theme/theme";
import { LineGraph } from '../../home/lineGraph';

export default function ModalScreen() {
    const theme = useTheme();
    return (
        <ModalContainer>
            <AntDesign name="sharealt" size={30} color={theme.colors.white} style={{alignSelf: 'flex-start'}} />
            <ModalHeader>
                <ModalLogo>
                    <Logo source={{uri: 'https://s3-alpha-sig.figma.com/img/51d6/6ea4/edec473abbe8c1dd7b09f1824a05dfc1?Expires=1700438400&Signature=m7zS1jAhiMg5sx~elLh2921OsOhKAYW472En8kPYTSBGtuQK8OmJMZO7kGLmh-IGeqcINYPkypMcf6mK24YoGJnO-EtzMdGyrkF88862GJlW2ZG3CuKcFMtYCoL2ATSGTaLLYRV8SiyV~GOK1-yFWH0-ZNUAdqQDeudN0uGUf0csMUpvd9N9mIOsBzAmovuwSBG7v3Ihv74TvL5EAlw68pMunYOLzSI-daG8TakFbcoe0X0wE1kxvm4FoCIiiWbh6x4Z-5V-XhUOm1rpTt45-3ZhkR4B5Dj~qpsezx9Y1tlDTSyVfuvjNv1L24Qjs6W9bSLqL4sD8WBTp1ELHNf8fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}/>
                </ModalLogo>
                <Text>AAPL  NASDAQ</Text>
                <Text>APPLE INC.</Text>
                <Box style={{flexDirection: 'row', gap: 4, alignItems: 'baseline'}}>
                    <Text style={{fontSize: 40}}>186.40</Text>
                    <Text style={{fontSize: 12}}>USD</Text>
                </Box>
                <Box style={{flexDirection: 'row', gap: 8}}>
                    <Text>+3.99  +2.19%</Text>
                    <Text>today</Text>
                </Box>
            </ModalHeader>
            
            <LineGraph/>
            {/* <Graph>
            </Graph> */}
        
        </ModalContainer>
    )
};