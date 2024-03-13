import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../globalStyles';

interface BotaoProps {
  texto: string;
  handleSubmit: () => void;
}

const Botao: React.FC<BotaoProps> = ({texto, handleSubmit}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.red,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 295,
        height: 50,
        marginVertical: 22,
      }}
      onPress={handleSubmit}>
      <Text style={{fontSize: 14, color: colors.white}}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default Botao;
