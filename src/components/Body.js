import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable - superPowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //Normal JS Variable
  // let listOfRestaurants = [ ];

  return (
    <div className="body">
      <div className="filter"> 
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      <input className="search-input"type="text" placeholder="e.g. Pizza, Burger" />
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
