import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>What's your email?</Text>
        <Text style={styles.subtitle}>Enter the email address associated with your account.</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="example@mail.com"
            placeholderTextColor="#444"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, !email && styles.buttonDisabled]}
        onPress={() => router.push('/auth/login')}
        disabled={!email}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E14',
    padding: 25,
  },
  backButton: {
    marginTop: 50,
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 40,
  },
  inputWrapper: {
    backgroundColor: '#1C2128',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
  },
  input: {
    color: '#FFF',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#29B6F6',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonDisabled: {
    backgroundColor: '#1C2128',
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});