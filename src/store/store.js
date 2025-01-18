import { configureStore } from '@reduxjs/toolkit'
import itemReducer from "./reducer/itemReducer";
import cartReducer from "./reducer/cartReducer";

export default configureStore({
  reducer: {
    itemReducer,
    cartReducer
  }
})