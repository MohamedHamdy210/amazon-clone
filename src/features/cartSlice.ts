import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export type itemType = {
  id: number;
  amount: number;
};
type actionType = {
  type: string;
  payload: itemType;
};
const initialState = {
  cartItems: [] as itemType [] ,
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<itemType>) => {
      if (state.cartItems.length > 0) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].amount += action.payload.amount;
        } else {
          state.cartItems.push(action.payload);
        }
      } else {
        state.cartItems.push(action.payload);
      }
    },
    incrementAmount: (state, action: actionType) => {
        state.cartItems.forEach(item=>{
            if (item.id===action.payload.id){
                item.amount++;
            }
        })
    },
    decrementAmount: (state, action:actionType)=>{
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.id && item.amount > 0) {
            item.amount--;
          }
        });


    }
    ,
    removeItem: (state, action: actionType) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;
    },  

  },
});
export const { addToCart,incrementAmount,decrementAmount,removeItem } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
