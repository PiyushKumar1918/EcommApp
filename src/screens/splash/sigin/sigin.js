import React from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
import {RoundButtons} from '../../../components/RoundButtons';

export const SignInScreens = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={{flex: 0.5}}>
        <Image
          source={require('../../../assets/sigin.jpg')}
          resizeMode={'cover'}
          style={{width: 420, height: 450}}
        />
      </View>
      <View style={{flex: 0.5, backgroundColor: '#ffffff'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Hello
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'black',
            fontWeight: '20',
          }}>
          Welcome To Our Ecommerce App
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
         
            
          }}>
          <RoundButtons label={'Log in'} />
          <RoundButtons label={'Sign Up'} border={true} />
       
        </View>
        <Text
          style={{
            textAlign: 'center',
            margin:20,
          }}>
          Or Via Social Media Account
        </Text>
      </View>
    </View>
  );
};
