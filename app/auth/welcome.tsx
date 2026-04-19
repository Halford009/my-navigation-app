import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Upper section for the Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>XEND</Text>
      </View>

      {/* Middle section for the text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Crypto payments made easy</Text>
        <Text style={styles.description}>
          Experience the future of finance with secure and instant transactions.
        </Text>
      </View>

      {/* Bottom section for buttons */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => router.push('/auth/email')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E14', // Dark theme as per video
    padding: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  logoText: {
    color: '#29B6F6', // The primary blue mentioned in the tutorial
    fontSize: 42,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  footer: {
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#29B6F6',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupButton: {
    borderWidth: 1,
    borderColor: '#1C2128',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});