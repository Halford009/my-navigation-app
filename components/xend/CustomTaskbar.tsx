import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomTaskbar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Icon Logic based on Assignment 1 instructions
        let iconName: any;
        if (route.name === 'index') iconName = isFocused ? 'home' : 'home-outline';
        else if (route.name === 'wallet') iconName = isFocused ? 'wallet' : 'wallet-outline';
        else if (route.name === 'plans') iconName = isFocused ? 'pie-chart' : 'pie-chart-outline';
        else if (route.name === 'referral') iconName = isFocused ? 'people' : 'people-outline';
        else if (route.name === 'account') iconName = isFocused ? 'person' : 'person-outline';
        else if (route.name === 'explore') iconName = isFocused ? 'search' : 'search-outline';

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
            <Ionicons name={iconName} size={24} color={isFocused ? '#29B6F6' : '#666'} />
            <Text style={[styles.label, { color: isFocused ? '#29B6F6' : '#666' }]}>
              {route.name === 'index' ? 'Home' : route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0A0E14',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#1C2128',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: { alignItems: 'center' },
  label: { fontSize: 12, marginTop: 4 },
});