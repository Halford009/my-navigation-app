import { Tabs } from 'expo-router';
import React from 'react';
import CustomTaskbar from '../../components/xend/CustomTaskbar'; // Adjust path based on your VS Code screenshot

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTaskbar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="wallet" options={{ title: 'Wallet' }} />
      <Tabs.Screen name="plans" options={{ title: 'Plans' }} />
      <Tabs.Screen name="referral" options={{ title: 'Referral' }} />
      <Tabs.Screen name="account" options={{ title: 'More' }} />
    </Tabs>
  );
}