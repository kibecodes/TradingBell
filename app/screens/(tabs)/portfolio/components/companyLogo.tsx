import React from 'react';

import { CompanyLogo } from '../portfolio.styles';

interface LogoProps {
  logoSource: { uri: string };
}

export const StockLogo = ({
  logoSource = {
    uri: 'https://s3-alpha-sig.figma.com/img/7c59/a55f/f782f9ef06770c27b59527baa771d0c6?Expires=1698624000&Signature=Y7zYnsyLMBCMDrNJ~d2z-wdFL5lMq4iLoyfReXi-42TaZs9Ilc4RwIGtzuRYaXoVzPcQg3lKUpf-aC1kPE8B192iss7KKeXZtqjqYBPsCb3GAn8o-s0NdVowUUXMl~LsBr48x4z8s7wW0NoEkrjaefzm~WuWs2Da7p-n3jp0vlUaxRKeY92ZzP~Cojm1hS-ltzoX6G7eb9MUCbBJvoitdjzJiOpjpskI4ViL~geWkmHsJ-zcekVZoUgt5XzlOA~2kBRoVlM93H7ho7sCZG~7sACAgDUGNVR2rtcRzABnlCx8h7BQ8ayygpq~0nKwwNl3PfXtCCfwpWFIFD3vCbuSaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
}: LogoProps) => {
  return <CompanyLogo source={logoSource} />;
};
