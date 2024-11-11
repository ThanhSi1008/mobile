// HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>A premium online store for sporter and their stylish choice</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://link_to_your_image.png' }} // Thay link hình ảnh vào đây
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('GetStarted')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF3EB',
    padding: 20,
    borderColor: '#D92BE2',
    borderWidth: 2,
  },
  header: {
    backgroundColor: '#E1F7D5',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  headerText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#D92BE2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  bikeImage: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4C4C',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
