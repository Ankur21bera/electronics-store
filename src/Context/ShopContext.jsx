import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate()

    const addToCart = async (itemId,colors) => {

        if (!colors) {
            toast.error('Select Your Color')
            return;
        }
       
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][colors]) {
                cartData[itemId][colors] += 1;
            }
            else{
                cartData[itemId][colors] = 1;
            }
        }

        else{
            cartData[itemId] = {};
            cartData[itemId][colors] = 1;
        }
        setCartItems(cartData);
    }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems){
        for(const item in cartItems[items]) {
            try {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            } catch (error) {

            }
        }
    }

    return totalCount;
  }

  const updateQuantity = async (itemId,colors,quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][colors] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = async => {
    let totalAmount = 0;
    for(const items in cartItems) {
        let itemInfo = products.find((product)=>product._id === items);
        for(const item in cartItems[items]) {
            try{
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item]
                }
            } catch (error) {

            }
        }
    }
    return totalAmount;
  }

    const value = {
      products,currency,delivery_fee,
      search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider