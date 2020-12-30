import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const allRestaurants = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
      )
    })
    return(
      <ul>
        {allRestaurants}
      </ul>
    );
  }
};

export default Restaurants;