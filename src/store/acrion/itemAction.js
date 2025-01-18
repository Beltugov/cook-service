import {SET_LIKE} from "../reducer/itemReducer";

export const setLiked = (type, id) => ({
  type: SET_LIKE,
  payload: {
    type: type,
    id: id
  }
})