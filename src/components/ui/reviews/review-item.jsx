import React from "react";
import dayjs from 'dayjs';
import {
  ReviewItemStyled,
  ReviewItemHeader,
  UserAvatar,
  UserName,
  ReviewItemBody,
  ReviewMessage,
  ReviewDate,
  ReviewRating,
  RatingStars,
  RatingStarsSpan
} from './styles';

function ReviewItem({review}) {
  const dateTime = dayjs(review.date).format('YYYY-MM-DD');
  const dateFormatted = dayjs(review.date).format('D.MM.YYYY');

  console.log(review.date);

  return (
    <ReviewItemStyled>

      <ReviewItemHeader>
        <UserAvatar src={review.avatarUrl}/>
        <ReviewRating>
          <RatingStars>
            <RatingStarsSpan style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </RatingStars>
          <ReviewDate>
            <time className="reviews__time" dateTime={dateTime}>{dateFormatted}</time>
          </ReviewDate>
        </ReviewRating>
        <UserName>{review.authorName}</UserName>
      </ReviewItemHeader>

      <ReviewItemBody>
        <ReviewMessage>{review.reviewMessage}</ReviewMessage>
      </ReviewItemBody>

    </ReviewItemStyled>
  );
}

export default ReviewItem;
