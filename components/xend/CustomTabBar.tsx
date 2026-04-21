import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { XendColors } from '../../constants/xend-theme';

const { width } = Dimensions.get('window');

// Mapping libraries and icon names
const icons: Record<string, any> = {
  index: { lib: 'Ionicons', focused: 'home', outlined: 'home-outline', label: 'Home' },
  wallet: { lib: 'Ionicons', focused: 'wallet', outlined: 'wallet-outline', label: 'Wallet' },
  referral: { lib: 'Ionicons', focused: 'people', outlined: 'people-outline', label: 'Referral' },
  plans: { lib: 'MaterialCommunityIcons', focused: 'piggy-bank', outlined: 'piggy-bank-outline', label: 'Plans' },
  account: { lib: 'Ionicons', focused: 'person', outlined: 'person-outline', label: 'More' },
};

export function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const activeRoute = icons[route.name];

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

        // SPECIAL CASE: The Center Referral Button
        if (route.name === 'referral') {
          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={styles.fabContainer} activeOpacity={0.8}>
              <View style={styles.fab}>
                <Ionicons name="people" size={28} color="white" />
              </View>
              <Text style={styles.labelActive}>Referral</Text>
            </TouchableOpacity>
          );
        }

        // STANDARD TABS
        const IconComponent = activeRoute?.lib === 'MaterialCommunityIcons' ? MaterialCommunityIcons : Ionicons;
        const iconName = isFocused ? activeRoute?.focused : activeRoute?.outlined;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <IconComponent
              name={iconName || 'help-circle-outline'}
              size={24}
              color={isFocused ? XendColors.white : XendColors.tabInactive}
            />
            <Text style={isFocused ? styles.labelActive : styles.labelInactive}>
              {activeRoute?.label || route.name}
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
    backgroundColor: '#0D0D0D', // Match the dark theme
    height: 90,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#222',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35, // Pull it up to float
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: XendColors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: XendColors.referralRing || '#000', // Uses the ring color we added
    shadowColor: XendColors.primaryBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  labelActive: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },
  labelInactive: {
    color: '#888',
    fontSize: 11,
    marginTop: 4,
  },
});