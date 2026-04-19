import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Welcome and Gift Icon */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>Agah Emmanuel</Text>
        </View>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => router.push('/referral')}>
            <Ionicons name="gift-outline" size={26} color="#29B6F6" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <Ionicons name="notifications-outline" size={26} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Portfolio Card */}
      <View style={styles.portfolioCard}>
        <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
        <Text style={styles.portfolioAmount}>$12,540.75</Text>
        <View style={styles.trendRow}>
          <Ionicons name="trending-up" size={16} color="#4CAF50" />
          <Text style={styles.trendText}>+2.5% ($312.10)</Text>
        </View>
      </View>

      {/* Quick Action Buttons */}
      <View style={styles.actionRow}>
        <ActionButton icon="send-outline" label="Send" color="#29B6F6" />
        <ActionButton icon="download-outline" label="Receive" color="#4CAF50" />
        <ActionButton icon="cart-outline" label="Buy" color="#FFA000" />
        <ActionButton icon="swap-horizontal-outline" label="Swap" color="#9C27B0" />
      </View>

      {/* Recent Transactions Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
      </View>

      <View style={styles.emptyState}>
        <Ionicons name="time-outline" size={48} color="#1C2128" />
        <Text style={styles.emptyText}>No recent activity</Text>
      </View>
    </ScrollView>
  );
}

// Sub-component for the circular action buttons
function ActionButton({ icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <View style={styles.actionItem}>
      <TouchableOpacity style={[styles.iconButton, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={24} color={color} />
      </TouchableOpacity>
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E14', padding: 20 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 25
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  welcomeText: { color: '#888', fontSize: 14 },
  userName: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  
  portfolioCard: { 
    backgroundColor: '#1C2128', 
    padding: 25, 
    borderRadius: 20, 
    marginBottom: 30 
  },
  portfolioLabel: { color: '#888', fontSize: 14 },
  portfolioAmount: { color: '#FFF', fontSize: 36, fontWeight: 'bold', marginVertical: 8 },
  trendRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  trendText: { color: '#4CAF50', fontSize: 14, fontWeight: '500' },

  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  actionItem: { alignItems: 'center' },
  iconButton: { width: 55, height: 55, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  actionLabel: { color: '#888', marginTop: 8, fontSize: 12 },

  sectionHeader: { marginBottom: 20 },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  emptyState: { alignItems: 'center', marginTop: 40 },
  emptyText: { color: '#444', marginTop: 10, fontSize: 14 }
});