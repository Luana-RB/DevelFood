import React, {useState} from 'react';
import {Container, Icon, Title} from './styles';
import {colors} from '../../globalStyles';

interface SearchProps {
  title: string;
  onChangeText: (text: string) => void;
}
const SearchBar: React.FC<SearchProps> = ({title, onChangeText}) => {
  return (
    <Container>
      <Icon source={require('../../../assets/images/search.png')} />
      <Title
        placeholder={title}
        placeholderTextColor={colors.gray}
        onChangeText={value => {
          onChangeText(value);
        }}
      />
    </Container>
  );
};

export default SearchBar;
