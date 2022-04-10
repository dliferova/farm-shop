import React from 'react';
import FavoriteCard from '/src/components/ui/favorite-card/favorite-card';
import {Favorites, FavoritesListStyled, FavoritesListItem, StyledTitle} from './styles';
import Button from "/src/components/ui/button/button";

function FavoritesList({ favorites }) {
  console.log("Cписок любимых продуктов");
  console.log(favorites);

  return (
    <Favorites>
      <StyledTitle as="h2">Избранное</StyledTitle>
      <FavoritesListStyled>
        {favorites.map((item) => (
          <FavoritesListItem key={item.id}>
            <FavoriteCard key={item.id} productInfo={item} />
          </FavoritesListItem>
        ))
        }
      </FavoritesListStyled>
      <Button>Показать еще</Button>
    </Favorites>
  );
}

export default FavoritesList;
