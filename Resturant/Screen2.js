import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './App';
import Starters from './Screen2';
import Mains from './Screen3';
import Desert from './Screen4';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
  <NavigationContainer>
    <Stack.navigator>
      <Stack.Screen name="Home" component={MainScreen}/>
      <Stack.Screen name="Starters" component={Starters}/>
      <Stack.Screen name="Mains" component={Mains}/>
      <Stack.Screen name="Desert" component={Desert}/>
    </Stack.navigator>
  </NavigationContainer>
  );
 };

 function Starters({NavigationContainer})
 {
  return(
    <View style={styles.container}>
      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Bruschetta.png')}/>
      </View>
      Name: Bruschetta
      Description: 'Toasted bread topped with fresh tomatoes, garlic, and basil.', price: 'R8.99'
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Calamari.png')}/>
      </View>
      Name: Calamari
      Description: 'Crispy fried squid rings served with marinara sauce.', price: 'R10.99'
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/salad.png')}/>
      </View>
      Name: Caprese Salad
      Description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.' , price: 'R9.99'
      </Text>
      

      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Dip.jpg')}/>
      </View>
      Name: Spinach Artichoke Dip
      Description: 'Creamy dip served with tortilla chips.', price: 'R7.99'
      </Text>


      <View style={styles.buttonContainer}>
      <View style={styles.topButtons}>
        <Button title="Starters" onPress={() => navigation.navigate('Starters')} />
          <Button title="Mains" onPress={() => navigation.navigate('Mains')} />
          <Button title="Desert" onPress={() => navigation.navigate('Desert')} />
        </View>  
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  mainPicture:{
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageSize:{
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bottomButton: {
    alignItems: 'center',
  },
  
  description: {
    textAlign: 'center',
    marginBottom: 5,
  },

  price: {
    fontWeight: 'bold',
  },


});

