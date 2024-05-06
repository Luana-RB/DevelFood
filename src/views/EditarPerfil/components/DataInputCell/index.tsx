import React, {Dispatch, SetStateAction} from 'react';
import {InputContainer, InputText} from '../../../../components/Input/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataContainer, DataText} from './styles';
import {colors, screenWidth} from '../../../../globalStyles';

interface DatacellProps {
  icon: string;
  title: string;
  small?: boolean;
  value: any;
  handleChange: Dispatch<SetStateAction<any>>;
}

const DataInputCell: React.FC<DatacellProps> = ({
  icon,
  title,
  small,
  value,
  handleChange,
}) => {
  const size = small ? screenWidth * 0.4 : screenWidth * 0.9;
  return (
    <DataContainer style={{width: size}}>
      <DataText>{title}</DataText>
      <InputContainer style={{width: size}}>
        <Icon
          name={icon}
          size={25}
          color={colors.gray}
          style={{marginHorizontal: 10}}
        />
        <InputText
          placeholder={title}
          placeholderTextColor={colors.gray}
          value={value}
          onChangeText={handleChange}></InputText>
      </InputContainer>
    </DataContainer>
  );
};

export default DataInputCell;
