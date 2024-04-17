import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageSourcePropType} from 'react-native';
import {colors} from '../../globalStyles';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../NoResultComponent';
const MAX_WAITING_TIME = 6000;

interface ListEmptyProps {
  text: string;
  imagePath: string;
}

export const ListEmptyComponent: React.FC<ListEmptyProps> = ({
  text,
  imagePath,
}) => {
  const [show, setShow] = useState(false);
  const [path, setPath] = useState<ImageSourcePropType>();

  useEffect(() => {
    if (imagePath === 'restaurant')
      setPath(require('../../../assets/images/notFoundRestaurant.png'));
    else if (imagePath === 'favorites')
      setPath(require('../../../assets/images/notFoundFavorites.png'));
    else setPath(require('../../../assets/images/notFoundRestaurant.png'));
  }, []);

  setTimeout(function () {
    setShow(true);
  }, MAX_WAITING_TIME);

  if (!show) return <ActivityIndicator size={50} color={colors.red} />;

  if (show) {
    return (
      <NoResultContainer>
        <NoResultImage source={path} />
        <NoResultText>{text}</NoResultText>
      </NoResultContainer>
    );
  } else return null;
};
