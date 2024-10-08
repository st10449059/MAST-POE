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

 function Desert({NavigationContainer})
 {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Bruschetta.png')}/>
      </View>
      Name: Chocolate Lava Cake
      Description: Warm chocolate cake with a gooey center, served with vanilla ice cream. Price: R8.99
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Calamari.png')}/>
      </View>
      Name: New York Cheesecake
      Description: Classic creamy cheesecake with a graham cracker crust. Price: R7.99
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/salad.png')}/>
      </View>
      Name: Tiramisu
      Description: Italian coffee-flavored dessert with layers of ladyfingers and mascarpone cheese. Price: R9.99
      </Text>
      

      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Dip.jpg')}/>
      </View>
      Name: Fruit Tart
      Description: Buttery pastry shell filled with custard and topped with fresh seasonal fruits. Price: R8.99
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