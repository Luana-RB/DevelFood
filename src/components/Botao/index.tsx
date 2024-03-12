import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Define an interface for the props
interface BotaoProps {
  texto: string;
}

// Use the interface in your component definition
const Botao: React.FC<BotaoProps> = ({texto}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#c20c18',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 295,
        height: 50,
        marginVertical: 22,
      }}>
      <Text style={{fontSize: 14, color: '#ffffff'}}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default Botao;
