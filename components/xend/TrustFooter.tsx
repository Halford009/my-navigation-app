import { XendColors } from '@/constants/xend-theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TrustFooter() {
  return (
    <View style={styles.wrap}>
      {/* Deposits Insured Row */}
      <View style={styles.row}>
        <MaterialCommunityIcons name="shield-check" size={16} color={XendColors.greenShield || '#10B981'} />
        <Text style={styles.insureText}> Deposits insured by | </Text>
        <View style={styles.tidalBadge}>
          <Text style={styles.tidalWave}>~~~</Text>
          <Text style={styles.tidalText}>tidal</Text>
        </View>
      </View>

      {/* Backed By Section with Dot Grid */}
      <View style={styles.backedContainer}>
        <Text style={styles.backedLabel}>Backed By:</Text>
        
        {/* The Dot Grid Background */}
        <View style={styles.dotGrid} pointerEvents="none">
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={styles.dotRow}>
              {Array.from({ length: 14 }).map((_, j) => (
                <View key={j} style={styles.dot} />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.logosRow}>
          <Text style={styles.logoMuted}>Google FOR STARTUPS</Text>
          <Text style={[styles.logoMuted, { marginLeft: 16 }]}>◆ BINANCE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  insureText: {
    color: '#888',
    fontSize: 12,
  },
  tidalBadge: {
    flexDirection: 'row',
    backgroundColor: '#1E293B', // Dark blue/grey badge
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignItems: 'center',
  },
  tidalWave: {
    color: '#3B82F6',
    fontSize: 10,
    marginRight: 4,
  },
  tidalText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backedContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  backedLabel: {
    color: '#666',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 8,
    zIndex: 2,
  },
  logosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  logoMuted: {
    color: '#444',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dotGrid: {
    position: 'absolute',
    top: -10,
    opacity: 0.2, // Make dots very subtle
  },
  dotRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#666',
  },
});