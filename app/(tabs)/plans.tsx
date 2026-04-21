import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { XendColors } from '../../constants/xend-theme';

export default function PlansScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Plans</Text>

        {/* Main Blue Savings Card */}
        <View style={styles.mainSavingsCard}>
          <Text style={styles.cardLabel}>SAVINGS PLAN</Text>
          <Text style={styles.cardAmount}>USD 0.00</Text>
        </View>

        {/* Top Row: Create Plan & Calculator */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.gridCard, { borderColor: XendColors.orange, borderWidth: 1 }]}>
            <View style={[styles.iconBox, { backgroundColor: '#2D1A12' }]}>
              <MaterialCommunityIcons name="piggy-bank" size={24} color={XendColors.orange} />
            </View>
            <Text style={[styles.gridTitle, { color: XendColors.orange }]}>Create Plan</Text>
            <Text style={styles.gridSubText}>Create a new fixed savings plan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridCard, { borderColor: '#1E293B', borderWidth: 1 }]}>
            <View style={[styles.iconBox, { backgroundColor: '#1E293B' }]}>
              <MaterialCommunityIcons name="calculator-variant" size={24} color="#3B82F6" />
            </View>
            <Text style={styles.gridTitle}>Interest Calculator</Text>
            <Text style={styles.gridSubText}>Calculate the interest on your savings</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>ALL SAVINGS PLANS</Text>

        {/* Bottom Row: Flexible & Fixed Savings */}
        <View style={styles.row}>
          <View style={styles.darkCard}>
            <Text style={styles.cardSmallLabel}>FLEXIBLE SAVINGS</Text>
            <Text style={styles.cardLargeAmount}>$0.00</Text>
            <TouchableOpacity style={styles.actionBtn}>
              <View style={styles.plusIcon}>
                <Ionicons name="add" size={16} color="white" />
              </View>
              <Text style={styles.actionBtnText}>ADD FUNDS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.darkCard}>
            <Text style={styles.cardSmallLabel}>FIXED SAVINGS</Text>
            <Text style={styles.cardLargeAmount}>$0.00</Text>
            <TouchableOpacity style={styles.actionBtn}>
              <View style={[styles.plusIcon, { backgroundColor: '#3B82F6' }]}>
                <Ionicons name="list" size={14} color="white" />
              </View>
              <Text style={styles.actionBtnText}>VIEW ALL PLANS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionHeader}>TODAY'S RATE</Text>
        <Text style={styles.rateText}>This rate is updated daily (Apr 13, 2026 02:43 AM)</Text>
        
        {/* Extra padding for bottom scroll */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  container: { flex: 1, paddingHorizontal: 20 },
  headerTitle: { color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: 20, marginBottom: 20 },
  
  mainSavingsCard: { 
    backgroundColor: '#1A56DB', 
    borderRadius: 16, 
    padding: 24, 
    height: 140, 
    justifyContent: 'center',
    marginBottom: 20 
  },
  cardLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: '600', letterSpacing: 1 },
  cardAmount: { color: 'white', fontSize: 42, fontWeight: 'bold', marginTop: 8 },

  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  gridCard: { width: '48%', backgroundColor: '#0D0D0D', borderRadius: 16, padding: 16, minHeight: 180 },
  iconBox: { width: 45, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  gridTitle: { color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  gridSubText: { color: '#888', fontSize: 12, lineHeight: 18 },

  sectionHeader: { color: '#888', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, marginTop: 10, marginBottom: 15 },
  
  darkCard: { width: '48%', backgroundColor: '#111', borderRadius: 16, padding: 18, minHeight: 160 },
  cardSmallLabel: { color: '#666', fontSize: 10, fontWeight: 'bold' },
  cardLargeAmount: { color: 'white', fontSize: 28, fontWeight: 'bold', marginVertical: 15 },
  
  actionBtn: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  plusIcon: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#1A56DB', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  actionBtnText: { color: 'white', fontSize: 10, fontWeight: 'bold' },

  rateText: { color: '#666', fontSize: 13, marginTop: 5 }
});