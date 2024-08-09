import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({product, handleProductDelete}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => handleProductDelete(product.id)}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title.slice(0, 25)}</Text>
        <Text>{product.description.slice(0, 40)}...</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>
          Rating: {product.rating.rate} ({product.rating.count} review)
        </Text>
        {/* <View style={styles.rating}>
          <Icon name="star" size={30} color="gold" />
          <Text style={styles.ratingText}>
            {product.rating.rate} ({product.rating.count} reviews)
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8dbe9',
    flexDirection: 'row',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    // backgroundColor: "#efefef",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#888',
    fontWeight: 'bold',
  },
  image: {
    width: '20%',
    height: 100,
    resizeMode: 'contain',
  },
  info: {
    width: '80%',
    paddingLeft: 15,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  category: {
    color: '#57064a',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  rating: {
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16
  },
  ratingText: {
    marginLeft: 10,
  },
});
