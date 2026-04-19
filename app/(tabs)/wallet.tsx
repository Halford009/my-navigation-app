import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // 1. Added ScrollView

export default function WalletScreen() {
  const [hideBalance, setHideBalance] = useState(false);

  const assets = [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', balance: '0.0024', usd: '120.50', color: '#F7931A', icon: 'currency-btc' },
    { id: '2', name: 'Ethereum', symbol: 'ETH', balance: '1.25', usd: '3,100.20', color: '#627EEA', icon: 'currency-eth' },
    { id: '3', name: 'Tether', symbol: 'USDT', balance: '500.00', usd: '500.00', color: '#26A17B', icon: 'currency-usd' },
    { id: '4', name: 'Solana', symbol: 'SOL', balance: '15.00', usd: '1,500.00', color: '#14F195', icon: 'currency-kzt' },
    // Add more items here to test the scroll!
  ];

  return (
    // 2. Wrap the entire content in a ScrollView
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.walletCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
            <Ionicons name={hideBalance ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceAmount}>{hideBalance ? "****.**" : "$3,720.70"}</Text>
      </View>

      <Text style={styles.sectionTitle}>Your Assets</Text>
      
      {assets.map((asset) => (
        <View key={asset.id} style={styles.assetItem}>
          <View style={styles.assetLeft}>
            <View style={[styles.iconCircle, { backgroundColor: asset.color + '20' }]}>
              <MaterialCommunityIcons name={asset.icon as any} size={24} color={asset.color} />
            </View>
            <View style={styles.assetNames}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetSymbol}>{asset.symbol}</Text>
            </View>
          </View>
          <View style={styles.assetRight}>
            <Text style={styles.assetBalance}>{asset.balance}</Text>
            <Text style={styles.assetUsd}>${asset.usd}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E14' },
  scrollContent: { 
    padding: 20, 
    paddingBottom: 100 // 3. IMPORTANT: Extra padding so the last item clears the taskbar
  },
  walletCard: { backgroundColor: '#1C2128', padding: 25, borderRadius: 20, marginTop: 40, marginBottom: 30 },
  balanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  balanceLabel: { color: '#888', fontSize: 14 },
  balanceAmount: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginVertical: 10 },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  assetItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1C2128', padding: 15, borderRadius: 15, marginBottom: 12 },
  assetLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 45, height: 45, borderRadius: 22.5, justifyContent: 'center', alignItems: 'center' },
  assetNames: { marginLeft: 15 },
  assetName: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  assetSymbol: { color: '#888', fontSize: 12 },
  assetRight: { alignItems: 'flex-end' },
  assetBalance: { color: '#FFF', fontWeight: 'bold' },
  assetUsd: { color: '#888', fontSize: 12 },
});