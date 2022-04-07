import React from 'react';
import FavoriteCard from '/src/components/ui/favorite-card/favorite-card';
import { Li } from '/src/components/styled';
import { Favorites, FavoritesListStyled } from './styles';

function FavoritesList({ favorites }) {
  console.log("Cписок любимых продуктов");
  console.log(favorites);

  return (
    <Favorites>
      <FavoritesListStyled>
        {favorites.map((item) => (
          <Li key={item.id}>
            <FavoriteCard key={item.id} productInfo={item} />
          </Li>
        ))
        }
      </FavoritesListStyled>
    </Favorites>
  );
}

export default FavoritesList;
