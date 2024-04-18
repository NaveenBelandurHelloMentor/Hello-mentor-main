import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/rootApi";
import counterReducer from "../features/sagar/SagarSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        counter:counterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

// Infering types from store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch