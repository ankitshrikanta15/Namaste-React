import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData?.info;

  return (
    <div className="restaurant-card h-[300px] w-72 m-5 shadow-md rounded-3xl">
      <img className="w-full h-2/3 object-cover rounded-3xl"
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
        <h5>{cuisines.join(", ")}</h5>
        <h5 className="mb-6">{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;