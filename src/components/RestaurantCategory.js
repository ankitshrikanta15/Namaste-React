import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
    
  }
  
  return (
  <div>
      <div className='w-[800px] shadow-lg p-4 my-4'>
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
        <span className="font-semibold text-2xl">
          {showItems ? (
            <i className="ri-arrow-up-s-line"></i>
          ) : (
            <i className="ri-arrow-down-s-line"></i>
          )}
        </span>
        </div>

      {showItems && <ItemList items={data.itemCards}/>}
      </div>

  </div>
  );
};

export default RestaurantCategory;