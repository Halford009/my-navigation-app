import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ReferralScreen() {
  const referralCode = "XEND-EMMA-2026";

  const onShare = async () => {
    try {
      await Share.share({
        message: `Join me on Xend! Use my referral code: ${referralCode}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View style={styles.headerCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="gift-outline" size={40} color="#29B6F6" />
        </View>
        <Text style={styles.title}>Rewards</Text>
        <Text style={styles.subtitle}>Let's grow together and earn rewards</Text>
      </View>

      {/* Referral Code Section */}
      <Text style={styles.sectionLabel}>Your referral code</Text>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{referralCode}</Text>
        <TouchableOpacity>
          <Ionicons name="copy-outline" size={20} color="#29B6F6" />
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Referrals</Text>
          <Text style={styles.statNumber}>0</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Points</Text>
          <Text style={styles.statNumber}>0</Text>
        </View>
      </View>

      {/* Instructions/Benefits Section (Extra content to test the scroll) */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>How it works</Text>
        <Text style={styles.infoText}>
          1. Invite your friends using your unique code.{"\n"}
          2. They sign up and complete their first transaction.{"\n"}
          3. You both get rewarded with Xend points!
        </Text>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareButtonText}>Share invite link</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E14',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, // Extra space at the bottom for the taskbar
  },
  headerCard: {
    backgroundColor: '#1C2128',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0A0E14',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#888', fontSize: 14, textAlign: 'center', marginTop: 10 },
  sectionLabel: { color: '#888', marginBottom: 10, fontSize: 14 },
  codeContainer: {
    flexDirection: 'row',
    backgroundColor: '#1C2128',
    padding: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  codeText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
  statsRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1C2128',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  statLabel: { color: '#888', fontSize: 12, marginBottom: 5 },
  statNumber: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  infoSection: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  infoTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  infoText: { color: '#888', fontSize: 14, lineHeight: 22 },
  shareButton: {
    backgroundColor: '#29B6F6',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  shareButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});