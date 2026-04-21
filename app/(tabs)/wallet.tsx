import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WalletScreen() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 100}}>
        <Text style={styles.pageTitle}>Wallets</Text>

        <View style={styles.blueCard}>
           <View style={styles.cardTop}>
              <Text style={styles.cardLabel}>My Asset Portfolio</Text>
              <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
                <Ionicons name={hideBalance ? "eye-off" : "eye"} size={20} color="#FFF" />
              </TouchableOpacity>
           </View>
           <Text style={styles.balanceText}>{hideBalance ? "$ **********" : "$ 12,480.22"}</Text>
        </View>

        <View style={styles.actionsRow}>
           <WalletAction icon="add" label="Add Fund" />
           <WalletAction icon="arrow-down" label="Withdraw" />
           <WalletAction icon="swap-horizontal" label="Swap" />
           <WalletAction icon="document-text" label="Statement" />
        </View>

        <View style={styles.tabBar}>
           <TouchableOpacity style={[styles.tab, styles.activeTab]}><Text style={styles.activeTabText}>Stablecoins</Text></TouchableOpacity>
           <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Utility</Text></TouchableOpacity>
           <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Memes 🔥</Text></TouchableOpacity>
        </View>

        <AssetItem name="CNGN" sub="Compliant Naira" amount="1,200.00" usd="≈ $1,200" color="#6366F1" initial="N" hide={hideBalance} />
        <AssetItem name="USDT" sub="Tether USD" amount="1,200.00" usd="≈ $1,200" color="#10B981" initial="T" hide={hideBalance} />
        <AssetItem name="USDC" sub="USD Coin" amount="1,200.00" usd="≈ $1,200" color="#2563EB" initial="$" hide={hideBalance} />
      </ScrollView>
    </SafeAreaView>
  );
}

const WalletAction = ({ icon, label }: any) => (
  <View style={styles.actionItem}>
    <View style={styles.actionIconBox}>
      <Ionicons name={icon} size={24} color="#1A56DB" />
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

const AssetItem = ({ name, sub, amount, usd, color, initial, hide }: any) => (
  <View style={styles.assetRow}>
    <View style={[styles.assetIcon, {backgroundColor: color}]}>
      <Text style={styles.assetInitialText}>{initial}</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.assetName}>{name}</Text>
      <Text style={styles.assetSub}>{sub}</Text>
    </View>
    <View style={{alignItems: 'flex-end'}}>
      <Text style={styles.assetAmount}>{hide ? "******" : amount}</Text>
      <Text style={styles.assetUsd}>{hide ? "*****" : usd}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#444" style={{marginLeft: 10}} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  pageTitle: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  blueCard: { backgroundColor: '#1A56DB', borderRadius: 16, padding: 20, marginBottom: 25 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { color: '#FFF', fontSize: 14, opacity: 0.9 },
  balanceText: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginTop: 15 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  actionItem: { alignItems: 'center' },
  actionIconBox: { width: 55, height: 55, backgroundColor: '#FFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  actionLabel: { color: '#FFF', fontSize: 11, marginTop: 8, fontWeight: '500' },
  tabBar: { flexDirection: 'row', backgroundColor: '#1A1A1A', borderRadius: 25, padding: 5, marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { backgroundColor: '#1A56DB', borderRadius: 20 },
  tabText: { color: '#888', fontSize: 13 },
  activeTabText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  assetRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 0.5, borderBottomColor: '#222', paddingBottom: 15 },
  assetIcon: { width: 45, height: 45, borderRadius: 23, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  assetInitialText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  assetName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  assetSub: { color: '#888', fontSize: 12 },
  assetAmount: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  assetUsd: { color: '#888', fontSize: 12 }
});