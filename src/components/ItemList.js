import { NON_VEG, VEG, ITEM_IMAGE } from "../utils/constants";

const ItemList = ({items}) => {
  console.log(items);
  
  return (
    <div>
      {items.map(item => (
        <div key={item.card.info.id} className=" flex justify-between items-center p-2 m-2 border-gray-500 border-b-2 text-left">
          <div className="w-[70%]">
            <div>
              {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? 
              <img className="w-5" src={NON_VEG}/> 
              : 
              <img className="w-5" src={VEG}/>}
            </div>
            <h1 className="font-bold text-lg">{item.card.info.name}</h1>
            <h1 className="font-semibold">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h1>
            <p className="pt-[20px] pb-[100px] tracking-tight font-medium text-[#676A6D]">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img className="h-[144px] w-[156px] object-cover rounded-2xl" src={ITEM_IMAGE + item.card.info.imageId} alt="The Restaurant didn't provide any image for this item." />
            
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
              <button 
                className="bg-white px-8 py-2 rounded-lg shadow-md border text-green-500 font-bold hover:shadow-lg hover:bg-slate-200"
              >
                ADD
              </button>
            </div>
          </div>
      </div>
    ))}
    </div>
  );
};
export default ItemList;