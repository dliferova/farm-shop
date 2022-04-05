import React from "react";
import dayjs from 'dayjs';
import {
  ReviewItemStyled,
  ReviewItemUserInfo,
  UserAvatar,
  UserName,
  ReviewItemMainInfo,
  ReviewMessage,
  ReviewDate,
  ReviewRating,
  RatingStars,
  RatingStarsSpan
} from './styles';

function ReviewItem({ review }) {
  const dateTime = dayjs(review.date).format('YYYY-MM-DD');
  const dateFormatted = dayjs(review.date).format('D.MM.YYYY');

  console.log(review.date);

  return (
    <ReviewItemStyled>

      <ReviewItemUserInfo>
        <UserAvatar src={review.avatarUrl}/>
        <UserName>{review.authorName}</UserName>
      </ReviewItemUserInfo>

      <ReviewItemMainInfo>
        <ReviewRating>
          <RatingStars>
            <span style={{width: '80%'}}/>
            <RatingStarsSpan className="visually-hidden">Rating</RatingStarsSpan>
          </RatingStars>
        </ReviewRating>
        <ReviewMessage>{review.reviewMessage}</ReviewMessage>
        <ReviewDate>
          <time className="reviews__time" dateTime={dateTime}>{dateFormatted}</time>
        </ReviewDate>
      </ReviewItemMainInfo>

    </ReviewItemStyled>
  );
}

export default ReviewItem;
