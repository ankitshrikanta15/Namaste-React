import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import 'remixicon/fonts/remixicon.css'

const Body = () => {
  // Local state variable - superPowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("BODY RENDERED", listOfRestaurants);

  //Normal JS Variable
  // let listOfRestaurants = [ ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7309194&lng=77.1277312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection.
      </h1>
    );

  const handleTopRatedClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilteredRestaurant(filteredList);
  };

  const handleHomeClick = () => {
    setFilteredRestaurant(listOfRestaurants); // Reset to show all restaurants
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-5 font-display font-medium">
      <div className="filter flex items-center">
        <button
          className="filter-button rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          onClick={handleTopRatedClick}
        >
          Top Rated Restaurants
        </button>
        <button
          className="home-button rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          onClick={handleHomeClick}
        >
          Show All
        </button>
        <div className="search p-5">
          <input
            className="search-input p-3 pr-28 rounded border-2 border-solid border-black"
            type="text"
            placeholder="e.g. Pizza, Burger"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const searchValue = e.target.value.toLowerCase();
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue)
              );
              setFilteredRestaurant(filtered);
            }}
          />
          {/* <button
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
            className="search-btn p-3 rounded border-2 border-solid bg-slate-800 border-black text-white"
          >
            Search
          </button> */}
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap pl-28">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.3 ? (<RestaurantCardPromoted resData ={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
