import React from 'react';
import { SafeAreaView, View } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import { theme } from '../theme';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: theme.grey, flex: 1 }}>
      <View style={{ backgroundColor: theme.white, padding: 15 }}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}
