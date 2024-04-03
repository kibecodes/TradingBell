import React from 'react';
import { View, StyleSheet } from 'react-native';

const RedDot = () => {
  return <View style={styles.redDot}></View>;
};

const styles = StyleSheet.create({
  redDot: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 10, // Adjust the size as needed
    height: 10, // Adjust the size as needed
    borderRadius: 5, // Make it a circle
    top: -5, // Adjust the position to align with the tab icon
    right: -5, // Adjust the position to align with the tab icon
  },
});

export default RedDot;
