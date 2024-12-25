import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData?.info;

  return (
    <div className="restaurant-card h-[320px] w-72 m-5 shadow-md rounded-3xl">
      <img className="w-full h-[60%] object-cover rounded-3xl pb-[10px]"
        src={ CDN_URL
           +
          cloudinaryImageId
        }
        alt="res-logo"
      /> 
      <div className="restaurant-card-details pl-4 font-display font-medium text-gray-500">
        <h3 className="font-bold text-zinc-950">{name}</h3>
        <h4>
          {avgRating} - {sla.slaString}
        </h4>
        <h5 className="">{cuisines.join(", ")}</h5>
        <h5 className="mb-6">{areaName}</h5>
      </div>
    </div>
  );
};

// Higher Order Component

// Input == restaurantcard => Restaurant card Promoted

 export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-2 py-1 rounded">Recommended</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;