import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Starters from './Screen2';
import Mains from './Screen3';
import Desert from './Screen4';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Here you would typically validate the credentials
  
    navigation.navigate('AddDish');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const AddDishScreen = () => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const navigation = useNavigation();

  const handleAddDish = (category) => {
    // Here you would typically add the dish to your data source
    console.log(`Adding ${dishName} to ${category}`);
    // Reset the form
    setDishName('');
    setDishDescription('');
    setDishPrice('');
  };

  const handleRemoveDish = (category) => {
    // Here you would typically remove a dish from your data source
    console.log(`Removing a dish from ${category}`);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Price"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Starters" onPress={() => handleAddDish('starters')} />
        <Button title="Add to Main Dishes" onPress={() => handleAddDish('mainDishes')} />
        <Button title="Add to Desserts" onPress={() => handleAddDish('desserts')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remove Starter" onPress={() => handleRemoveDish('starters')} />
        <Button title="Remove Main Dish" onPress={() => handleRemoveDish('mainDishes')} />
        <Button title="Remove Dessert" onPress={() => handleRemoveDish('desserts')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Starters" onPress={() => navigation.navigate('Starters')} />
        <Button title="Main" onPress={() => navigation.navigate('Main')} />
        <Button title="Deserts" onPress={() => navigation.navigate('Desert')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export { LoginScreen, AddDishScreen };