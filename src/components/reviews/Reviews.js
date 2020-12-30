import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantReviewsFilter = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const restaurantReviews = restaurantReviewsFilter.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview}/>
    })
  
    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;