import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

export const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.navigate('SignIn')

    },2000)
  return (
    <ImageBackground
      source={require('../../assets/splash.jpg')}
      resizeMode={'cover'}
      style={{flex: 1, padding: 15}}>
      <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
        Ecommerce APP
      </Text>
    </ImageBackground>
  );
};
