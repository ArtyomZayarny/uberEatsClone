import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { theme } from '../theme';
import firebase from '../firebase';
import { MenuItems } from '../components/restaurantDetails/MenuItems';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({ items: [] });
  const { items, restaurantName } = useSelector((state) => state.cart.selectedItems);
  const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, current) => prev + current, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => setLastOrder(doc.data()));
      });
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.white,
      }}
    >
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}
      >
        <LottieView
          style={{
            height: 100,
            alignSelf: 'center',
            marginBottom: 30,
          }}
          /* eslint-disable global-require */
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox />
          <LottieView
            style={{
              height: 100,
              alignSelf: 'center',
            }}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
