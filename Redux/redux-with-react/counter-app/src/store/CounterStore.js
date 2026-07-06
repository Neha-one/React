import { createStore } from "redux";

const INIT_VALUE = {
  counter: 0,
  privacy: false,
}
const counterReducer = (store = INIT_VALUE, action) => {
  let newStore = store;
  if (action.type === 'INCREMENT') {
    newStore = { counter: store.counter + 1, privacy: store.privacy }
  }
  else if (action.type === 'DECREMENT') {
    newStore = { counter: store.counter - 1, privacy: store.privacy }
  }
  else if (action.type === 'ADD') {
    newStore = { ...store, counter: store.counter + Number(action.payload.num) }
  }
  else if (action.type === 'SUBSTRACT') {
    newStore = { ...store, counter: store.counter - Number(action.payload.num) }
  }
  else if (action.type === 'RESET') {
    newStore = { ...store, counter: 0 }
  }
  else if (action.type === 'PRIVACY_TOGGLE') {
    return {...store, privacy: !store.privacy}
  }
  return newStore;
}

const CounterStore = createStore(counterReducer);

export default CounterStore;