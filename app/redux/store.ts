import {configureStore} from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import authReducer from './slices/AuthSlice';
import warehousemansReducer from './slices/warehousemanSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        warehousemans: warehousemansReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;