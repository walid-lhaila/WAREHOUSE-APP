import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts, createProducts } from "@/app/redux/slices/productsSlice";

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

    describe("createProducts", () => {
        it("should create a product successfully", async () => {
            const newProduct = { id: 1, name: "New Product", barcode: "12345" };
            mock.onPost(`${process.env.EXPO_PUBLIC_BACKEND_URL}/products`).reply(200, newProduct);

            await store.dispatch(createProducts(newProduct));
            const state = store.getState().products;

            expect(state.products).toContainEqual(newProduct);
            expect(state.loading).toBe(false);
            expect(state.error).toBeNull();
        });

        it("should handle creation error when barcode already exists", async () => {
            const existingProduct = { id: 1, name: "Existing Product", barcode: "12345" };
            const newProduct = { id: 2, name: "New Product", barcode: "12345" };

            store = configureStore({
                reducer: {
                    products: productsReducer,
                },
                preloadedState: {
                    products: {
                        products: [existingProduct],
                        loading: false,
                        error: null,
                        productDetails: null,
                    },
                },
            });

            await store.dispatch(createProducts(newProduct));
            const state = store.getState().products;

            expect(state.error).toBe("Product Already Exists");
            expect(state.loading).toBe(false);
            expect(state.products).toEqual([existingProduct]);
        });

        it("should handle API error during creation", async () => {
            const newProduct = { id: 1, name: "New Product", barcode: "12345" };
            mock.onPost(`${process.env.EXPO_PUBLIC_BACKEND_URL}/products`).reply(500, "Server Error");

            await store.dispatch(createProducts(newProduct));
            const state = store.getState().products;

            expect(state.error).toBe("Server Error");
            expect(state.loading).toBe(false);
            expect(state.products).toEqual([]);
        });
    });
});