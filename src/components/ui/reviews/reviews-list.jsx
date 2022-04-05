import React from 'react';
import ReviewItem from './review-item';
import { ReviewsListStyled } from './styles';

const MAX_REVIEW_COUNT = 2;

function ReviewsList({reviews}) {
  const userReviews = [...reviews].slice(0, MAX_REVIEW_COUNT);



  return (
    <ReviewsListStyled>
      {
        userReviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))
      }
    </ReviewsListStyled>
  );
}

export default ReviewsList;
