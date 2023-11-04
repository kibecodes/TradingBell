import { render, screen } from '@testing-library/react-native';
import { Appearance } from "react-native";

import Portfolio from '../../../app/screens/(tabs)/portfolio/portfolio';
import { ColorSchemeProvider } from '../ColorSchemeContext';

test('color scheme check', () => {
    const color = Appearance.getColorScheme();
    expect(color).toEqual('light');
})

jest.mock('../ColorSchemeContext', () => {
    jest.fn(() => ({ colorScheme: null }));
});

test('colorSchemeProvider renders with color Scheme as null', () => {
    render(
        <ColorSchemeProvider>
            <Portfolio />
        </ColorSchemeProvider>
    );

    const portfolioComponent = screen.getByTestId('portfolio-component');
    expect(portfolioComponent).toBeTruthy();
})