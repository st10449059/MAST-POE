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


 function Mains({NavigationContainer})
 {
  return(
    <View style={styles.container}>
      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/salmon.png')}/>
      </View>
      Name: Grilled Salmon
      Description: Fresh salmon fillet grilled to perfection, served with roasted vegetables. Price: R22.99
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/beef.png')}/>
      </View>
      Name: Beef Tenderloin
      Description: Tender beef steak cooked to your liking, accompanied by mashed potatoes. Price: R26.99
      </Text>


      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Chicken.png')}/>
      </View>
      Name: Chicken Parmesan
      Description: Breaded chicken breast topped with marinara sauce and melted mozzarella. Price: R18.99
      </Text>
      

      <Text style={styles.description}>
      <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/Lasagna.jpg')}/>
      </View>
      Name: Vegetable Lasagna
      Description: Layers of pasta, fresh vegetables, and cheese baked in a rich tomato sauce. Price: R16.99
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