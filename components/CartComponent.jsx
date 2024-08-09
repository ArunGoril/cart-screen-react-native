import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Card from './Card';

// Import the JSON data
const data = require('../data/data.json');

const CartComponent = () => {
  const [products, setProducts] = useState(data);
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0,
  );

  const handleProductDelete = productId => {
    const filteredProducts = products.filter(
      product => product.id !== productId,
    );
    setProducts(filteredProducts);
  };

  const handleContinueClick = () => {
    Alert.alert('Hello!!');
  };

  if (products.length === 0) {
    return (
      <View>
        <Text  style={{fontSize: 22, fontWeight: "bold"}}>Cart is Empty</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.cartTitle}>My Cart</Text>
      <ScrollView>
        <View>
          {products.map(product => {
            return (
              <Card
                key={product.id}
                product={product}
                handleProductDelete={handleProductDelete}
              />
            );
          })}
        </View>
        <View style={styles.priceDetails}>
          <Text style={styles.priceDetailsText}>Price Details</Text>
          <View style={styles.totalPriceRow}>
            <Text style={styles.totalPriceLabel}>Total Product Price</Text>
            <Text style={styles.totalPriceValue}>
              ${totalPrice.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinueClick}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  cartTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  priceDetails: {
    padding: 15,
    margin: 15,
  },
  priceDetailsText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPriceLabel: {
    fontSize: 18,
    // fontWeight: "bold"
  },
  totalPriceValue: {
    fontSize: 18,
    // fontWeight: "bold"
  },
  continueButton: {
    backgroundColor: '#93478f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
