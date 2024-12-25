import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString, avgRating, sla, locality, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo);
  
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);

  return (
    <div className="menu text-center flex items-start justify-center flex-col pl-96 font-display">
      <h1 className="font-bold text-2xl pt-5 pb-3">{name}</h1>
      <div className="h-[200px] w-[800px] border-2 border-blue-400 rounded">
        <h1>{avgRating}({totalRatingsString}) {costForTwoMessage}</h1>
        {/* <div className="h-[5px] w-[5px] rounded-full bg-black"></div> */}
        <h1>{cuisines}</h1>
        <h1>{sla.slaString}</h1>
        <h1>{locality}{", "}{areaName}</h1>

      </div>
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
        showItems={index === showIndex && true}
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
      {/* <h2>Menu</h2>
      <div>
        {itemCards.map((item) => (
          <h5 key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </h5>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
