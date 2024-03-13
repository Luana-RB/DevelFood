import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

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
        width: screenWidth * 0.75,
        height: screenHeight * 0.06,
        marginVertical: screenHeight * 0.02,
      }}
      onPress={handleSubmit}>
      <Text style={{fontSize: 14, color: colors.white, fontWeight: 'bold'}}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default Botao;
