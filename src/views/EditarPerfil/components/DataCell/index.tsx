import React, {Dispatch, SetStateAction} from 'react';
import {InputContainer, InputText} from '../../../../components/Input/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataContainer, DataText} from './styles';
import {colors} from '../../../../globalStyles';

interface DatacellProps {
  icon: string;
  title: string;
  value: any;
  handleChange: Dispatch<SetStateAction<any>>;
}

const DataCell: React.FC<DatacellProps> = ({
  icon,
  title,
  value,
  handleChange,
}) => {
  return (
    <DataContainer>
      <DataText>{title}</DataText>
      <InputContainer>
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

export default DataCell;
