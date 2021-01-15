import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {

    const {restaurants, deleteRestaurant} = this.props
    const restaurantList = restaurants.map(restaurant => 
      <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={deleteRestaurant}/>
    )

    return(
      <ul>
         {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;