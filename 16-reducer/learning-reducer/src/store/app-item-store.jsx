import { createContext } from "react";
import { useReducer } from "react";

// const AppContext = createContext([])
// it will suggest me word when i am going to use this context.
export const AppContext = createContext(
  {
    appVal: [],
    addNewItem: () => { },
    deleteItem: () => { }
  });

function reducer(state, action) {
  let newReducerItemUpdater = state;
  if (action.type === "NEW_ITEM") {
    newReducerItemUpdater = [...state, {
      name: action.payload.NameVal,
      date: action.payload.DateVal,
    }];

  }
  else if (action.type === "DELETE_ITEM") {
    newReducerItemUpdater = state.filter((item) => item.name !== action.payload);
  }
  return newReducerItemUpdater;
}



const ItemContextReducer = ({ children }) => {
  let dataList = [
    {
      name: "aryan",
      date: 15,
    }
  ];

  let [appVal, dispatch] = useReducer(reducer, dataList)

  let addNewItem = (NameVal, DateVal) => {
    dispatch({
      type: "NEW_ITEM",
      payload: {
        NameVal, DateVal
      }
    })
  };

  let deleteItem = (itemName) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: itemName
    })
  }
  return <AppContext.Provider value={{ appVal, addNewItem, deleteItem }}>{children}</AppContext.Provider>
}
export default ItemContextReducer;

