import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  // Assignment 5 Data Mapping
  const settingsRows = [
    { id: '1', title: 'Edit Profile', icon: 'person-outline' },
    { id: '2', title: 'Verify Phone Number', icon: 'call-outline' },
    { id: '3', title: 'KYC Verification', icon: 'shield-checkmark-outline' },
    { id: '4', title: 'Support Chat', icon: 'chatbubbles-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={40} color="#FFF" />
        </View>
        <Text style={styles.userName}>Agah Emmanuel</Text>
        <TouchableOpacity>
          <Ionicons name="copy-outline" size={16} color="#29B6F6" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionLabel}>Account Settings</Text>
      
      {settingsRows.map((item) => (
        <TouchableOpacity key={item.id} style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name={item.icon as any} size={22} color="#888" />
            <Text style={styles.rowText}>{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#444" />
        </TouchableOpacity>
      ))}

      {/* Biometric Toggle Logic from Assignment 5 video */}
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Ionicons name="finger-print" size={22} color="#888" />
          <Text style={styles.rowText}>Biometric Login</Text>
        </View>
        <Switch 
          value={isBiometricEnabled} 
          onValueChange={setIsBiometricEnabled}
          trackColor={{ false: "#333", true: "#29B6F6" }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E14', padding: 20 },
  profileHeader: { alignItems: 'center', marginTop: 40, marginBottom: 30 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#1C2128', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  userName: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  sectionLabel: { color: '#29B6F6', fontSize: 14, fontWeight: 'bold', marginBottom: 15, marginTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#1C2128' },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  rowText: { color: '#FFF', marginLeft: 15, fontSize: 16 },
});