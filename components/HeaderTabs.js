import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = React.useState('Delivery');
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
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      backgroundColor:
        props.activeTab === props.text ? theme.black : theme.white,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? theme.white : theme.black,
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
