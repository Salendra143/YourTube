import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import CartSlice from "./CartSlice";

const appStore = configureStore({
    reducer:{
        app: appSlice,
        cart: CartSlice,
    }

})

export default appStore;