import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';
import { theme } from '../theme';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: theme.gray, flex: 1 }}>
      <View style={{ backgroundColor: theme.white, padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
