import {ADD_ITEM, REMOVE_ITEM} from "../reducer/cartReducer";


export const addItem = (item, count) => (
  {
    type: ADD_ITEM,
    payload: {
      count,
      item
    }
  }
)

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
  }
)