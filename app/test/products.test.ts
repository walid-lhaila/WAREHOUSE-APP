import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "@/app/redux/slices/productsSlice";

const mock = new MockAdapter(axios);

describe("Product Test", () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                products: productsReducer,
            },
        });
    });

    afterEach(() => {
        mock.reset();
    });

    describe("fetchProducts", () => {
        it("should fetch products successfully", async () => {
            const mockData = [{ id: 1, name: "Product 1" }];
            mock.onGet(`${process.env.EXPO_PUBLIC_BACKEND_URL}/products`).reply(200, mockData);

            await store.dispatch(fetchProducts());
            const state = store.getState().products;

            expect(state.products).toEqual(mockData);
            expect(state.loading).toBe(false);
            expect(state.error).toBeNull();
        });

        it("should handle fetch error", async () => {
            mock.onGet(`${process.env.EXPO_PUBLIC_BACKEND_URL}/products`).reply(500, "Server Error");

            await store.dispatch(fetchProducts());
            const state = store.getState().products;

            expect(state.error).toBe("Server Error");
            expect(state.loading).toBe(false);
            expect(state.products).toEqual([]);
        });
    });
});