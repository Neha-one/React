import { createContext } from "react";

// const AppContext = createContext([])
// it will suggest me word when i am going to use this context.
const AppContext = createContext(
  {
    appVal: [],
    addNewItem: () => { },
    deleteItem: () => { }
  });
export default AppContext;  