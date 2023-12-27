import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shops-slices";


export default configureStore({
    reducer: {shopReducer}
})