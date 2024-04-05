import React, {useState} from 'react';
import {SearchBarContainer, SearchIcon, SearchInput} from './styles';
import {colors} from '../../globalStyles';

interface SearchProps {
  title: string;
  onChangeText: (text: string) => void;
}
const SearchBar: React.FC<SearchProps> = ({title, onChangeText}) => {
  return (
    <SearchBarContainer>
      <SearchIcon source={require('../../../assets/images/search.png')} />
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
