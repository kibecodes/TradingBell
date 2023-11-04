import { render, screen } from '@testing-library/react-native';
import React from 'react';

import {LayoutScreen} from './_layout';
import { ColorSchemeProvider }  from '../src/components/ColorSchemeContext';

// Mock the context value at the top level
jest.mock('../src/components/ColorSchemeContext', () => ({
    useColorScheme: jest.fn(() => ({ colorScheme: 'light' })), // Provide a mock context value
}));

// First test case for context value 
test('LayoutScreen with custom context values', () => {
    const customColorScheme = 'dark';
    const customDispatch = jest.fn();

    render(
        <ColorSchemeProvider values={{ colorScheme: customColorScheme, dispatch: customDispatch }}>
            <LayoutScreen />
        </ColorSchemeProvider>
    )

    // Assertions specific to custom context values
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toHaveStyle({ color: 'darkTextColor' })
    
})

// Second test case for default context values
describe('LayoutScreen Component', () => {
    it('renders with the default context values', () => {
        render(
           <ColorSchemeProvider>
                <LayoutScreen />
           </ColorSchemeProvider>
        )
    });    

    // Assertions specific to default context values
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toHaveStyle({ color: 'lightTextColor' });
})