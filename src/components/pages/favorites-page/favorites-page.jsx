import React from 'react';
import FavoritesList from "../../blocks/favorites-list/favorites-list";
import {StyledTitle} from "../../blocks/favorites-list/styles";

function FavoritesPage({favorites}) {
  return (
    <>
      <StyledTitle as="h2">Избранное</StyledTitle>
      {favorites ? (
        <FavoritesList favorites={favorites}/>
      ) : (
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan your future
            trips.
          </p>
        </div>
      )
      }
    </>
  );
}

export default FavoritesPage;
