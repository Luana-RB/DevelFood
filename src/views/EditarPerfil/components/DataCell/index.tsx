import React, {Dispatch, SetStateAction} from 'react';
import {InputContainer} from '../../../../components/Input/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, screenWidth} from '../../../../globalStyles';
import {DataText} from '../DataInputCell/styles';
import {DataContainer, InputText} from './styles';
import {Alert} from 'react-native';

interface DatacellProps {
  icon: string;
  title: string;
  small?: boolean;
  value: any;
  handleChange: Dispatch<SetStateAction<any>>;
}

const DataCell: React.FC<DatacellProps> = ({icon, title, small, value}) => {
  const size = small ? screenWidth * 0.4 : screenWidth * 0.9;
  return (
    <DataContainer
      style={{width: size}}
      onPress={() => {
        Alert.alert(`Não é possível modificar seu ${title}`);
      }}>
      <DataText>{title}</DataText>
      <InputContainer style={{width: size}}>
        <Icon
          name={icon}
          size={25}
          color={colors.gray}
          style={{marginHorizontal: 10}}
        />
        <InputText>{value}</InputText>
      </InputContainer>
    </DataContainer>
  );
};

export default DataCell;
