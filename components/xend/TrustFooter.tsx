import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TrustFooter() {
  return (
    <View style={styles.container}>
      <Ionicons name="shield-checkmark-sharp" size={16} color="#4CAF50" />
      <Text style={styles.footerText}>
        Regulated by the Central Bank of Nigeria
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  footerText: {
    color: '#444',
    fontSize: 12,
    fontWeight: '500',
  },
});