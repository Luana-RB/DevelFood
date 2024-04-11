import React, {useState} from 'react';
import {SearchBarContainer, SearchInput} from './styles';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchProps {
  title: string;
  onChangeText: (text: string) => void;
}
const SearchBar: React.FC<SearchProps> = ({title, onChangeText}) => {
  return (
    <SearchBarContainer>
      <Icon name="magnify" size={30} color={colors.gray} style={{margin: 10}} />
      <SearchInput
        placeholder={title}
        placeholderTextColor={colors.gray}
        onChangeText={value => {
          onChangeText(value);
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
