import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from '../../theme';
import { OrderItem } from './OrderItem';
import firebase from '../../firebase';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: theme.white,
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
});
export const ViewCart: React.FC = ({ total, navigation }) => {
  const { restaurantName, items } = useSelector((state) => state.cart.selectedItems);
  const [modalVisible, setModalVisible] = useState(false);
  const addOrderToFireBase = () => {
    const db = firebase.firestore();
    db.collection('orders').add({
      items,
      restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate('OrderCompleted');
  };
  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>{total}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: theme.black,
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                position: 'relative',
                width: 300,
              }}
              onPress={() => addOrderToFireBase()}
            >
              <Text
                style={{
                  color: theme.white,
                  fontSize: 20,
                }}
              >
                Checkout
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  right: 20,
                  color: theme.white,
                  fontSize: 15,
                  top: 17,
                }}
              >
                {total}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal animationType="slide" visible={modalVisible} transparent onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 40,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: 'black',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 15,
              alignItems: 'center',
              borderRadius: 30,
              width: 300,
              position: 'relative',
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: theme.white,
                fontSize: 20,
                marginRight: 30,
              }}
            >
              ViewCart
            </Text>
            <Text
              style={{
                color: theme.white,
                fontSize: 20,
              }}
            >
              {total}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
