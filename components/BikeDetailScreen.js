// BikeDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BikeDetailScreen = ({ route }) => {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.image} />
      <Text style={styles.bikeName}>{bike.name}</Text>
      <Text style={styles.discountText}>15% OFF | {bike.price}</Text>
      <Text style={styles.oldPrice}>$449</Text>
      
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        It is a very important form of writing as we write almost everything in paragraphs, 
        be it an answer, essay, story, emails, etc.
      </Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  bikeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discountText: {
    color: '#808080',
    fontSize: 16,
    marginBottom: 5,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    color: '#808080',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#808080',
    marginTop: 5,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BikeDetailScreen;