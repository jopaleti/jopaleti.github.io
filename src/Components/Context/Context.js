import React, {createContext, useState, useReducer} from "react";

export const Cart = createContext();
const ageReducer = (state, action) =>{
    switch(action.type) {
        case 'dec':
            return state - 1;
        case 'inc':
            return state + 1;
        default:
            return state;
    }
}

const Context = ({children}) => {
    const [cart, setCart] = useState([]);
    // Updatiing the cart items quatity
    const [age, dispatch] = useReducer(ageReducer, 40);

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].qty += d;
        if(arr[ind].qty === 0) arr[ind].qty = 1;
        setCart([...arr])
    }
    return (
        <Cart.Provider value={{cart, setCart, handleChange, dispatch, age}}>
            {children}
        </Cart.Provider>
    )
}

export default Context