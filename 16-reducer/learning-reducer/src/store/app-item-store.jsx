import { useReducer } from "react";
import { createContext } from "react";

// const AppContext = createContext([])
// it will suggest me word when i am going to use this context.
export const AppContext = createContext(
  {
    appVal: [],
    addNewItem: () => { },
    deleteItem: () => { }
  });


const appItemReducer = (currentVal, action) => {

  let newAppItem = currentVal;

  if (action.type === "NEW_ITEM") {

    newAppItem = [...currentVal, {

      name: action.payload.NameVal,
      date: action.payload.DateVal,
    }];
  }
  else if (action.type === "DEL_ITEM") {

    newAppItem = currentVal.filter((item) => item.name !== action.payload.itemName);
  }
  return newAppItem;
}

const AppContextProvider = ({ children }) => {

  let dataList = [{ name: "aryan", date: 15, }];

  const [appVal, dispatachTodoItems] = useReducer(appItemReducer, []);

  let addNewItem = (NameVal, DateVal) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        NameVal, DateVal
      }
    }
    dispatachTodoItems(newItemAction);

  };
  let deleteItem = (itemName) => {

    let newDelItemAction = {
      type: "DEL_ITEM",
      payload: { itemName }
    }
    dispatachTodoItems(newDelItemAction);
  }
  return <AppContext.Provider value={{ appVal, addNewItem, deleteItem }}> {children}</AppContext.Provider>
}

export default AppContextProvider;
