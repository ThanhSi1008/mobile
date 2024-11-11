// GetStartedScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addBike, removeBike } from '../redux/bikesSlice';

const GetStartedScreen = ({ navigation }) => {
  const bikes = useSelector(state => state.bikes.bikes); // Lấy danh sách xe từ Redux store
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BikeDetail', { bike: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => dispatch(removeBike(item.id))} // Xóa xe khi nhấn vào ❤️
      >
        <Text>❤️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>
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

