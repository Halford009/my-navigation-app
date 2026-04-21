import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { XendColors } from '../../constants/xend-theme';

export default function AccountScreen() {
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Section */}
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color="#555" />
          </View>
         <Text style={styles.username}>@Agah_Emmanuel</Text>
          <TouchableOpacity style={styles.copyBtn}>
            <Ionicons name="copy-outline" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Referral Banner */}
        <TouchableOpacity style={styles.referralBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.referralTitle}>Referral</Text>
            <Text style={styles.referralSub}>Refer friends and earn points</Text>
          </View>
          <View style={styles.bannerRight}>
            <MaterialCommunityIcons name="medal-outline" size={24} color="#FBBF24" style={{marginRight: 10}} />
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>

        {/* Menu List Container */}
        <View style={styles.menuContainer}>
          <MenuItem 
            icon="person-add-outline" 
            title="Account Settings" 
            subtitle="Edit your profile and next of kin" 
          />
          <MenuItem 
            icon="shield-checkmark-outline" 
            title="Verify Phone Number" 
            subtitle="Enable OTP notifications" 
          />
          <MenuItem 
            icon="card-outline" 
            title="KYC Verification" 
            subtitle="Complete your KYC" 
          />
          <MenuItem 
            icon="chatbubble-outline" 
            title="Support" 
            subtitle="Chat with our support agents" 
          />
          
          {/* Biometrics Toggle Item */}
          <View style={styles.menuItem}>
            <View style={styles.iconBox}>
              <Ionicons name="finger-print-outline" size={22} color={XendColors.primaryBlue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.menuTitle}>Biometrics</Text>
              <Text style={styles.menuSubtitle}>Enable Secure Login</Text>
            </View>
            <Switch 
              value={biometricsEnabled}
              onValueChange={setBiometricsEnabled}
              trackColor={{ false: '#333', true: '#FFF' }}
              thumbColor={biometricsEnabled ? '#E0E7FF' : '#888'}
            />
          </View>

          <MenuItem 
            icon="shield-outline" 
            title="Security" 
            subtitle="Add an extra layer of security" 
            isLast 
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-component for Menu Items
const MenuItem = ({ icon, title, subtitle, isLast }: any) => (
  <TouchableOpacity style={[styles.menuItem, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.iconBox}>
      <Ionicons name={icon} size={22} color={XendColors.primaryBlue} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </View>
    <Ionicons name="chevron-forward-circle" size={24} color="#333" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  headerTitle: { color: 'white', fontSize: 34, fontWeight: 'bold' },
  scrollContent: { paddingHorizontal: 20 },
  
  profileRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  avatar: { 
    width: 60, height: 60, borderRadius: 30, backgroundColor: '#222', 
    justifyContent: 'center', alignItems: 'center', marginRight: 15 
  },
  username: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  copyBtn: { marginLeft: 'auto' },

  referralBanner: { 
    backgroundColor: XendColors.primaryBlue, 
    borderRadius: 16, 
    padding: 20, 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 25
  },
  referralTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  referralSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4 },
  bannerRight: { flexDirection: 'row', alignItems: 'center' },

  menuContainer: { 
    backgroundColor: '#111', 
    borderRadius: 20, 
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#222'
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#222'
  },
  iconBox: { 
    width: 44, height: 44, borderRadius: 12, backgroundColor: '#1A1A1A', 
    justifyContent: 'center', alignItems: 'center', marginRight: 15 
  },
  menuTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
  menuSubtitle: { color: '#888', fontSize: 12, marginTop: 4 }
});