import uuid from "uuid";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Cringe" },
    { id: uuid(), name: "Naners" },
    { id: uuid(), name: "Epic" },
    { id: uuid(), name: "Kenyam Knuckles" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      console.log(...state);
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}