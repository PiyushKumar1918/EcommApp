import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const RoundButtons = ({label, border = false}) => {
  return (
    <TouchableOpacity>
            <View
      style={{
        backgroundColor: border ? 'white' : '#034ef7',
        width: 120,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: 'black',
        marginLeft: 10,
        borderWidth: border ? 1 : 0,
        borderColor: 'black',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: border ? 'black' : '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
    </View>
    </TouchableOpacity>

  );
};
