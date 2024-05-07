import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        message: [], 
        query: null, // Changed query to be a single value instead of an array
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(25, 1);
            state.message.unshift(action.payload); 
        },
        addQuery: (state, action) => {
            state.query = action.payload; // Replace the existing query value with the new payload
        }
    }
});

export const { addMessage, addQuery } = CartSlice.actions;
export default CartSlice.reducer;
