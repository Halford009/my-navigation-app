import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TrustFooter } from '../../components/xend/TrustFooter';
import { XendLogo } from '../../components/xend/XendLogo';
import { XendColors } from '../../constants/xend-theme';

export default function LoginScreen() {
  const router = useRouter();
  const [step, setStep] = useState<'welcome' | 'email' | 'password'>('welcome');
  const [email, setEmail] = useState('');

  const handleBack = () => {
    if (step === 'password') setStep('email');
    else if (step === 'email') setStep('welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        
        {/* Top Header Row */}
        <View style={styles.header}>
          {step !== 'welcome' ? (
            <TouchableOpacity onPress={handleBack}>
               <XendLogo compact />
            </TouchableOpacity>
          ) : <View />}
          
          <TouchableOpacity style={styles.chatButton}>
            <Ionicons name="chatbubble-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
          {/* STEP 1: WELCOME SCREEN */}
          {step === 'welcome' && (
            <View style={styles.centerSection}>
              <View style={styles.logoCircle}>
                <XendLogo />
              </View>
              <Text style={styles.heroTitle}>Welcome to the{"\n"}Future of finance</Text>
              <Text style={styles.heroSubText}>
                To get started create an account, if you already have an account we will log you in
              </Text>
              
              <CenteredAuthButton 
                icon="mail" 
                label="Continue with Email" 
                color={XendColors.primaryBlue} 
                onPress={() => setStep('email')} 
              />
              <CenteredAuthButton icon="logo-google" label="Continue with Google" color="#111" />
              <CenteredAuthButton icon="logo-apple" label="Continue with Apple" color="#111" />
            </View>
          )}

          {/* STEP 2: EMAIL TAB */}
          {step === 'email' && (
            <View style={styles.formSection}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.subTitle}>Enter your email address</Text>
              
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#666" />
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter your Email" 
                  placeholderTextColor="#666"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                />
              </View>

              <TouchableOpacity style={styles.mainBtn} onPress={() => setStep('password')}>
                <Text style={styles.mainBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* STEP 3: PASSWORD TAB */}
          {step === 'password' && (
            <View style={styles.formSection}>
              <View style={styles.profileRow}>
                <View style={styles.avatarLarge}>
                  <Ionicons name="person" size={40} color="#555" />
                </View>
                <Text style={styles.welcomeUser}>Welcome, Agah_Emmanuel</Text>
              </View>

              <Text style={styles.subTitle}>Enter your password</Text>
              
              <Text style={styles.inputLabel}>Your Password</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" />
                <TextInput style={styles.input} placeholder="........" placeholderTextColor="#666" secureTextEntry />
                <Ionicons name="eye-outline" size={20} color="#666" />
              </View>

              <TouchableOpacity><Text style={styles.forgotText}>Forgot Password?</Text></TouchableOpacity>

              <View style={styles.faceIdBox}>
                <MaterialCommunityIcons name="face-recognition" size={60} color="#444" />
              </View>

              <TouchableOpacity style={styles.mainBtn} onPress={() => router.replace('/(tabs)')}>
                <Text style={styles.mainBtnText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setStep('email')}>
                <Text style={styles.switchText}>Not you? <Text style={{color: XendColors.orange}}>Switch account</Text></Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>

        {/* The "Deposits Insured" Footer - Stays at bottom of every step */}
        <View style={styles.footerContainer}>
          <TrustFooter />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Centered Auth Button Component
function CenteredAuthButton({ icon, label, color, onPress }: any) {
  return (
    <TouchableOpacity style={[styles.authBtn, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.btnContent}>
        <Ionicons name={icon} size={20} color="white" style={{ marginRight: 12 }} />
        <Text style={styles.authBtnText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D0D' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', height: 80 },
  chatButton: { backgroundColor: 'white', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  scrollContent: { paddingHorizontal: 25, paddingBottom: 20 },
  
  // Welcome Step Styles
  centerSection: { alignItems: 'center', marginTop: 10 },
  logoCircle: { width: 180, height: 180, borderRadius: 90, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center', marginBottom: 35, borderWidth: 1, borderColor: '#333' },
  heroTitle: { color: 'white', fontSize: 34, fontWeight: 'bold', textAlign: 'center', lineHeight: 42 },
  heroSubText: { color: '#AAA', textAlign: 'center', fontSize: 16, marginTop: 20, marginBottom: 40, lineHeight: 24 },
  
  // Button Centering
  authBtn: { width: '100%', height: 60, borderRadius: 30, marginBottom: 15, justifyContent: 'center', alignItems: 'center' },
  btnContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  authBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  // Form Styles
  formSection: { marginTop: 20 },
  title: { color: 'white', fontSize: 36, fontWeight: 'bold' },
  subTitle: { color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 8, marginBottom: 35 },
  inputLabel: { color: '#888', fontSize: 14, marginBottom: 10 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1A1A1A', borderRadius: 15, paddingHorizontal: 18, height: 64, borderWidth: 1, borderColor: '#222' },
  input: { flex: 1, color: 'white', marginLeft: 12, fontSize: 16 },
  mainBtn: { backgroundColor: '#1A233A', height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 40 },
  mainBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  
  // Password Step
  profileRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  avatarLarge: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', marginRight: 20 },
  welcomeUser: { color: 'white', fontSize: 22, fontWeight: '600' },
  forgotText: { color: 'white', textAlign: 'right', marginTop: 15, fontWeight: '700' },
  faceIdBox: { alignItems: 'center', marginVertical: 40 },
  switchText: { color: 'white', textAlign: 'center', marginTop: 30, fontSize: 15 },

  footerContainer: { paddingBottom: 25, backgroundColor: '#0D0D0D' }
});