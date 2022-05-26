import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = ({ activeTab, text, setActiveTab }) => (
  <TouchableOpacity
    style={{
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      backgroundColor: activeTab === text ? theme.black : theme.white,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? theme.white : theme.black,
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
