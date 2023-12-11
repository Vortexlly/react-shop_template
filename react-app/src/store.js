import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';
import { loadState, saveState } from "./localStorage";

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState(store.getState()); // Зберігаємо стан після кожного оновлення
  });

export default store;