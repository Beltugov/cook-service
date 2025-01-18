export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

const initialStore = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
}


const cartReducer = (state = initialStore, action) => {
  switch (action.type) {
    case (ADD_ITEM):
      return {
        items: [...state.items,
          {
            itemCount: action.payload.count,
            itemPrice: action.payload.count * action.payload.item.price,
            item: action.payload.item
          }],
        totalCount: state.totalCount + action.payload.count ,
        totalPrice:  state.totalPrice + action.payload.count * action.payload.item.price,
      }
    case (REMOVE_ITEM):
      return {
        items: state.items.filter((elem) => elem.item.id !== action.payload.id),
        totalCount: state.items.reduce((elem) => elem.itemCount),
        totalPrice: state.items.reduce((elem) => elem.itemPrice),

      }
    default:
      return state
  }
}

export default cartReducer