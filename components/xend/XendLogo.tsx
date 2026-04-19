import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function XendLogo() {
  return (
    <View style={styles.container}>
      {/* Primary Blue 'X' and White 'end' as seen in the academy design */}
      <Text style={styles.logoMain}>X<Text style={styles.logoSub}>end</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMain: {
    color: '#29B6F6', // Primary Blue
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: -1,
  },
  logoSub: {
    color: '#FFFFFF', // White
  },
});