import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import cartImage from "../assets/cart-Image.avif";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center p-10">
      <h1 className="cart font-semibold text-2xl">Cart</h1>
      <button className="p-2 m-2 bg-slate-800 text-yellow-300 rounded-xl"
      onClick={handleClearCart}      
      >Clear Cart</button>
      {cartItems.length === 0 && (
        <>
        <div className="flex justify-center items-center flex-col">
          <img className="w-[300px] py-5" src={cartImage} alt="cart" />
          <h1 className="text-3xl font-medium pb-3">Your cart is empty</h1>
          <h3>You can go to home page to view more restaurants.</h3>
          <button className="px-10 py-4 rounded-md mt-4 bg-black text-white hover:bg-slate-700 uppercase"><Link to={"/"}>See restaurants near you</Link></button>
          </div>
        </>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;