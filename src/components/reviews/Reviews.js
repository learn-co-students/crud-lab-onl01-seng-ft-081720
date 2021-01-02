import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const parentRestaurant = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = parentRestaurant.map((review, index) => 
      <Review key={index} review={review} deleteReview={deleteReview}/>
      ) 
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;