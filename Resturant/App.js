import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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


function MainScreen({NavigationContainer})
{
  return (
    <View style={styles.container}>
     <View style={styles.mainPicture}>
      <Image style ={styles.ImageSize}
      source={require('./img/se.jpg')}/>
    </View>
      <Text style={styles.description}>
      Welcome to Savory Elegance, a culinary gem celebrating a decade of excellence in fine dining. This 5-star restaurant has become a beloved staple in the community, renowned for its exquisite cuisine and impeccable service. At Savory Elegance, we pride ourselves on providing an unforgettable dining experience, where every dish tells a story and every visit feels like a special occasion.
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
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ImageSize:{
    width: 350,
    height: 300
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


});