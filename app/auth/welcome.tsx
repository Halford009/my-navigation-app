// app/auth/welcome.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { XendLogo } from '../../components/xend/XendLogo';
import { XendColors } from '../../constants/xend-theme';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoTop}>
        <XendLogo />
      </View>
      
      <View style={styles.bottomSection}>
        <Text style={styles.heroText}>Secure your future with Xend Finance</Text>
        <Text style={styles.subText}>The most secure way to save and invest in Africa.</Text>
        
        <TouchableOpacity style={styles.primaryBtn}>
           <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryBtn}>
           <Text style={[styles.btnText, {color: 'white'}]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'space-between' },
  logoTop: { marginTop: 100, alignItems: 'center' },
  bottomSection: { padding: 30, marginBottom: 40 },
  heroText: { color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 15 },
  subText: { color: '#888', fontSize: 16, marginBottom: 30 },
  primaryBtn: { backgroundColor: XendColors.primaryBlue, padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  secondaryBtn: { borderWidth: 1, borderColor: '#333', padding: 18, borderRadius: 12, alignItems: 'center' },
  btnText: { fontWeight: 'bold', fontSize: 16 }
});