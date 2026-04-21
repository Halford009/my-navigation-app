import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { XendColors } from '../../constants/xend-theme';

export default function HomeScreen() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  
  // 1. New state for balance visibility
  const [showBalance, setShowBalance] = useState(false);

  const toggleTask = (id: number) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        
        {/* BLUE HEADER SECTION */}
        <View style={styles.blueContainer}>
          <View style={styles.headerRow}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#555" />
            </View>
            <View style={{ flex: 1 }}>
             <Text style={styles.welcomeText}>Hi, @Agah_Emmanuel</Text>
              <Text style={styles.subWelcomeText}>Start saving now</Text>
            </View>
            <TouchableOpacity style={styles.chatHeaderBtn}>
              <Ionicons name="chatbubble-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.balanceContainer}>
            <View style={styles.balanceLabelRow}>
              <Text style={styles.balanceLabel}>PORTFOLIO BALANCE</Text>
              
              {/* 2. Interactive Eye Icon */}
              <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={{ marginLeft: 8 }}>
                <Ionicons 
                  name={showBalance ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color="white" 
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.historyBtn}>
                <Text style={styles.historyText}>Transaction History</Text>
                <Ionicons name="chevron-forward" size={14} color="white" />
              </TouchableOpacity>
            </View>

            {/* 3. Logic to switch between Text and Stars */}
            <Text style={styles.mainBalance}>
              {showBalance ? "₦ 2,450,120.00" : "**********"}
            </Text>
          </View>

          <View style={styles.floatingCard}>
            <View style={styles.leafIconBox}>
              <Ionicons name="leaf-outline" size={22} color={XendColors.primaryBlue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.savingsLabel}>Total Savings</Text>
              {/* Toggle also applies to savings */}
              <Text style={styles.savingsAmount}>
                {showBalance ? "₦ 890,000.00" : "**********"}
              </Text>
            </View>
            <TouchableOpacity style={styles.plansBadge}>
              <Text style={styles.plansBadgeText}>Plans</Text>
              <Ionicons name="chevron-forward" size={14} color={XendColors.primaryBlue} />
            </TouchableOpacity>
          </View>
        </View>

        {/* QUICK ACTIONS SECTION */}
        <View style={styles.bodyContent}>
          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
          <View style={styles.actionGrid}>
            <ActionItem icon="bank-outline" label="To Bank" badge="NEW" isMCI />
            <ActionItem icon="arrow-down-circle-outline" label="Withdraw" />
            <ActionItem icon="piggy-bank-outline" label="Save" isMCI />
            <ActionItem icon="briefcase-outline" label="Invest" />
            <ActionItem icon="trending-up-outline" label="High Yield" badge="🔥" />
            <ActionItem icon="swap-horizontal-outline" label="Swap" />
          </View>

          <Text style={styles.sectionTitle}>TO DO</Text>
          <View style={styles.todoList}>
            <TodoItem 
              label="Update your profile." 
              isChecked={completedTasks.includes(1)} 
              onPress={() => toggleTask(1)} 
            />
            <TodoItem 
              label="Verify your Phone Number" 
              isChecked={completedTasks.includes(2)} 
              onPress={() => toggleTask(2)} 
            />
            <TodoItem 
              label="Complete KYC Process Check" 
              isChecked={completedTasks.includes(3)} 
              onPress={() => toggleTask(3)} 
            />
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-components
const ActionItem = ({ icon, label, badge, isMCI }: any) => {
  const IconComponent = isMCI ? MaterialCommunityIcons : Ionicons;
  return (
    <View style={styles.actionItemContainer}>
      <View style={styles.actionIconBox}>
        <IconComponent name={icon} size={28} color={XendColors.primaryBlue} />
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.actionLabelText}>{label}</Text>
    </View>
  );
};

const TodoItem = ({ label, isChecked, onPress }: any) => (
  <TouchableOpacity style={styles.todoItem} activeOpacity={0.7} onPress={onPress}>
    <View style={[styles.checkbox, isChecked && styles.checkboxActive]}>
      {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
    </View>
    <Text style={styles.todoText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  blueContainer: { backgroundColor: XendColors.primaryBlue, height: 240, padding: 20, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, zIndex: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', marginRight: 12, borderWidth: 1, borderColor: '#444' },
  welcomeText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  subWelcomeText: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 },
  chatHeaderBtn: { backgroundColor: 'white', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' },
  balanceContainer: { marginTop: 20 },
  balanceLabelRow: { flexDirection: 'row', alignItems: 'center' },
  balanceLabel: { color: 'white', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  historyBtn: { flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' },
  historyText: { color: 'white', fontSize: 12, marginRight: 4, fontWeight: '500' },
  mainBalance: { color: 'white', fontSize: 36, fontWeight: 'bold', marginTop: 8 },
  floatingCard: { position: 'absolute', bottom: -45, left: 20, right: 20, backgroundColor: 'white', borderRadius: 18, padding: 18, flexDirection: 'row', alignItems: 'center', elevation: 5 },
  leafIconBox: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#F0F5FF', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  savingsLabel: { fontSize: 13, color: '#666' },
  savingsAmount: { fontSize: 20, fontWeight: 'bold', color: XendColors.primaryBlue, marginTop: 2 },
  plansBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FF', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 25 },
  plansBadgeText: { color: XendColors.primaryBlue, fontWeight: 'bold', fontSize: 13, marginRight: 4 },
  bodyContent: { marginTop: 75, paddingHorizontal: 20 },
  sectionTitle: { color: '#888', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, marginBottom: 20, marginTop: 15 },
  actionGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  actionItemContainer: { width: '31%', alignItems: 'center', marginBottom: 25 },
  actionIconBox: { width: 70, height: 70, backgroundColor: 'white', borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  actionLabelText: { color: '#888', fontSize: 12, marginTop: 10, fontWeight: '500' },
  badge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#FF4D4D', paddingHorizontal: 7, paddingVertical: 3, borderRadius: 8 },
  badgeText: { color: 'white', fontSize: 9, fontWeight: 'bold' },
  todoList: { gap: 12 },
  todoItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111', paddingVertical: 20, paddingHorizontal: 18, borderRadius: 18, borderWidth: 1, borderColor: '#222' },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: XendColors.primaryBlue, marginRight: 16, justifyContent: 'center', alignItems: 'center' },
  checkboxActive: { backgroundColor: XendColors.primaryBlue },
  todoText: { color: 'white', fontSize: 15, fontWeight: '600' }
});