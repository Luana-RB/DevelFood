import React, {useState} from 'react';
import {Container, Name} from './styles';
import {colors} from '../../globalStyles';

interface CategoryCardProps {
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({name}) => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(!selected);
  }
  return (
    <Container
      onPress={handleSelected}
      style={{backgroundColor: selected ? colors.red : colors.white}}>
      <Name style={{color: selected ? colors.white : colors.red}}>{name}</Name>
    </Container>
  );
};

export default CategoryCard;
