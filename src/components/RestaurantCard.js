import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={ CDN_URL
           +
          cloudinaryImageId
        }
        alt="res-logo"
      /> 
      <div className="restaurant-card-details">
        <h3>{name}</h3>
        <h4>
          {avgRating} - {sla.slaString}
        </h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;