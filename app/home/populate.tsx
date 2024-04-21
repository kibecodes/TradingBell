import { Feather, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StatusBar, Platform, TextInput } from 'react-native';

import { Box, useTheme } from '../Theme/theme';

export default function Populate() {
  const router = useRouter();
  const [text, setText] = useState('');
  const theme = useTheme();

  const onChangeText = (inputText: React.SetStateAction<string>) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    console.log('Submitted text:', text);
    setText('');
  };

  return (
    <>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 10,
          marginEnd: 10,
          alignItems: 'center',
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={22}
          color="black"
          onPress={router.back}
        />
        <TextInput
          style={{
            width: '80%',
            height: 60,
            textAlign: 'left',
            fontSize: 20,
            fontWeight: '600',
          }}
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}
          value={text}
          placeholder="Search"
        />
        <Feather name="sliders" size={22} color="black" />
      </Box>
      <Box
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: theme.colors.mainBackground,
          // backgroundColor: 'skyblue',
        }}
      >
        <ExpoStatusBar style="auto" />
      </Box>
    </>
  );
}
