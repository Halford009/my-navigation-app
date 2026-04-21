import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { XendColors } from '../../constants/xend-theme';

export default function ReferralScreen() {
  const onShare = async () => {
    try {
      await Share.share({ message: 'Join Xend Finance using my code: AGAH-EMMA' });
    } catch (error) { console.log(error); }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        
        {/* BLUE HEADER SECTION */}
        <View style={styles.blueContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Referral</Text>
            <TouchableOpacity style={styles.chatHeaderBtn}>
              <Ionicons name="chatbubble-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Earn while you refer</Text>
            <Text style={styles.bannerSub}>Invite your friends and earn reward points for every successful signup.</Text>
          </View>

          {/* FLOATING WHITE CARD */}
          <View style={styles.floatingCard}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>TOTAL REFERRALS</Text>
              <Text style={styles.statValue}>0</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>POINTS EARNED</Text>
              <Text style={[styles.statValue, { color: XendColors.orange }]}>0 pts</Text>
            </View>
          </View>
        </View>

        {/* CONTENT SECTION */}
        <View style={styles.bodyContent}>
          <Text style={styles.sectionTitle}>MY REFERRAL CODE</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.referralCode}>AGAH-EMMA</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={20} color={XendColors.primaryBlue} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.shareBtn} onPress={onShare}>
            <Text style={styles.shareBtnText}>SHARE REFERRAL LINK</Text>
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Ionicons name="information-circle-outline" size={20} color="#888" />
            <Text style={styles.infoText}>
              Your friends must verify their phone number and complete KYC for you to receive rewards.
            </Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  blueContainer: { 
    backgroundColor: XendColors.primaryBlue, 
    height: 260, 
    padding: 20, 
    borderBottomLeftRadius: 28, 
    borderBottomRightRadius: 28,
    zIndex: 10 
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  headerTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  chatHeaderBtn: { backgroundColor: 'white', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  bannerTextContainer: { marginTop: 25 },
  bannerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  bannerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 8, lineHeight: 20 },

  floatingCard: { 
    position: 'absolute', bottom: -45, left: 20, right: 20, 
    backgroundColor: 'white', borderRadius: 18, padding: 20, 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
    elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 
  },
  statBox: { alignItems: 'center' },
  statLabel: { fontSize: 10, color: '#888', fontWeight: 'bold', letterSpacing: 0.5 },
  statValue: { fontSize: 22, fontWeight: 'bold', color: '#000', marginTop: 5 },
  divider: { width: 1, height: 40, backgroundColor: '#EEE' },

  bodyContent: { marginTop: 80, paddingHorizontal: 20 },
  sectionTitle: { color: '#888', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, marginBottom: 15 },
  codeContainer: { 
    flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, 
    padding: 20, alignItems: 'center', justifyContent: 'space-between',
    borderWidth: 1, borderColor: '#222' 
  },
  referralCode: { color: 'white', fontSize: 20, fontWeight: 'bold', letterSpacing: 2 },
  copyButton: { backgroundColor: '#F0F5FF', padding: 10, borderRadius: 12 },
  shareBtn: { 
    backgroundColor: XendColors.primaryBlue, borderRadius: 16, height: 60, 
    justifyContent: 'center', alignItems: 'center', marginTop: 20 
  },
  shareBtnText: { color: 'white', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
  infoBox: { flexDirection: 'row', marginTop: 30, paddingHorizontal: 10 },
  infoText: { color: '#666', fontSize: 12, marginLeft: 10, lineHeight: 18, flex: 1 }
});