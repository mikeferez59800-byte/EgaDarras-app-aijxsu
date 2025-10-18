
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Accueil',
    },
    {
      name: 'consent',
      route: '/(tabs)/consent',
      icon: 'hand.raised.fill',
      label: 'Consentement',
    },
    {
      name: 'equality',
      route: '/(tabs)/equality',
      icon: 'equal.circle.fill',
      label: 'Égalité',
    },
    {
      name: 'stereotypes',
      route: '/(tabs)/stereotypes',
      icon: 'person.2.fill',
      label: 'Stéréotypes',
    },
  ];

  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf="house.fill" drawable="ic_home" />
          <Label>Accueil</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="consent">
          <Icon sf="hand.raised.fill" drawable="ic_consent" />
          <Label>Consentement</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="equality">
          <Icon sf="equal.circle.fill" drawable="ic_equality" />
          <Label>Égalité</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="stereotypes">
          <Icon sf="person.2.fill" drawable="ic_stereotypes" />
          <Label>Stéréotypes</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="consent" />
        <Stack.Screen name="equality" />
        <Stack.Screen name="stereotypes" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
