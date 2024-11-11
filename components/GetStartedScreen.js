// GetStartedScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: '$1800', image: 'https://link_to_image_1.png' },
  { id: '2', name: 'Pina Mountai', price: '$1700', image: 'https://link_to_image_2.png' },
  { id: '3', name: 'Pina Bike', price: '$1500', image: 'https://link_to_image_3.png' },
  { id: '4', name: 'Pinarello', price: '$1900', image: 'https://link_to_image_4.png' },
  { id: '5', name: 'Pinarello', price: '$2700', image: 'https://link_to_image_5.png' },
  { id: '6', name: 'Pinarello', price: '$1350', image: 'https://link_to_image_6.png' },
];

const GetStartedScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('BikeDetail', { bike: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.bikeName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.heartButton}>
          <Text>❤️</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The world’s Best Bike</Text>
  
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}><Text>All</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text>Roadbike</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text>Mountain</Text></TouchableOpacity>
        </View>
  
        <FlatList
          data={bikes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: '#FF6347',
    fontSize: 14,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default GetStartedScreen;
