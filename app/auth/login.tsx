import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Profile Circle from the video */}
        <View style={styles.profileCircle}>
          <Ionicons name="person" size={40} color="#29B6F6" />
        </View>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Agah Emmanuel</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Enter your password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#444"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons 
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color="#888" 
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.replace('/(tabs)')} // Redirects to the dashboard
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
  header: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 40,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1C2128',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  welcomeText: { color: '#888', fontSize: 16 },
  userName: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: 5 },
  inputSection: {
    flex: 1,
    justifyContent: 'center', // Keeps it centralized as discussed
  },
  label: { color: '#888', marginBottom: 10, fontSize: 14 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C2128',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 60,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 18,
  },
  eyeIcon: { padding: 5 },
  forgotText: {
    color: '#29B6F6',
    textAlign: 'right',
    marginTop: 15,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#29B6F6',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});