import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // 1. Ensured all imports are here

export default function PlansScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.headerTitle}>Savings Plan</Text>
      <Text style={styles.mainBalance}>USD 0.00</Text>

      <View style={styles.row}>
        {/* Create Plan Button */}
<TouchableOpacity style={[styles.card, { borderColor: '#FFA000' }]} onPress={() => {}}>
  {/* Swap Ionicons to MaterialCommunityIcons for this specific icon */}
  <MaterialCommunityIcons name="piggy-bank-outline" size={30} color="#FFA000" />
  <Text style={styles.cardText}>Create Plan</Text>
</TouchableOpacity>

        {/* Interest Button */}
        <TouchableOpacity style={[styles.card, { borderColor: '#29B6F6' }]} onPress={() => {}}>
          <Ionicons name="calculator-outline" size={30} color="#29B6F6" />
          <Text style={styles.cardText}>Interest</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>All saving plans</Text>

      {/* Flexible Savings */}
      <TouchableOpacity style={styles.listItem} onPress={() => {}}>
        <View style={styles.listIcon}>
          <Ionicons name="add-circle-outline" size={24} color="#29B6F6" />
        </View>
        <View>
          <Text style={styles.listTitle}>Flexible Savings</Text>
          <Text style={styles.listSub}>Save and withdraw anytime</Text>
        </View>
      </TouchableOpacity>

      {/* Fixed Savings */}
      <TouchableOpacity style={styles.listItem} onPress={() => {}}>
        <View style={styles.listIcon}>
          <Ionicons name="list-outline" size={24} color="#FFA000" />
        </View>
        <View>
          <Text style={styles.listTitle}>Fixed Savings</Text>
          <Text style={styles.listSub}>Lock funds for higher interest</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E14', padding: 20 },
  headerTitle: { color: '#888', textAlign: 'center', marginTop: 40 },
  mainBalance: { color: '#FFF', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  row: { flexDirection: 'row', gap: 15, marginVertical: 20 },
  card: { 
    flex: 1, 
    height: 120, 
    borderWidth: 1, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#1C2128' 
  },
  cardText: { color: '#FFF', marginTop: 10, fontWeight: '500' },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  listItem: { 
    flexDirection: 'row', 
    backgroundColor: '#1C2128', 
    padding: 20, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginBottom: 15 
  },
  listIcon: { marginRight: 15 },
  listTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  listSub: { color: '#888', fontSize: 12 }
});