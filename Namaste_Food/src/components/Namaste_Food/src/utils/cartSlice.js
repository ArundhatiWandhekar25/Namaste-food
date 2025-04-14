import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem:(state , action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop();
        },
        //RTK says either mutate the state or return a new state
        clearCart : (state, action)=>{
            // state.items.length= 0;
            return {items : []};
        },
    },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;