import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${process.env.EXPO_PUBLIC_BACKEND_URL}/products`;

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const createProducts = createAsyncThunk(
    "products/create",
    async (newProduct) => {
        const response = await axios.post(API_URL, newProduct);
        return response.data;
    }
);

export const getProductDetails = createAsyncThunk(
    "product/getDetails",
    async (productId, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${API_URL}/${productId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || 'something Went Wrong');
        }

    }
);

export const addStock = createAsyncThunk(
    "products/addStock",
    async ({ productId, updatedProduct }, { rejectWithValue }) => {
        try {
            await axios.put(`${API_URL}/${productId}`, updatedProduct);
            return { productId, updatedProduct };
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const updateStockQuantity  = createAsyncThunk(
    "products/updateStockQuantity",
    async ({ productId, city, quantity }, {rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/${productId}`);
            let product = response.data;

            const updatedStock = product.stocks.map(stock =>
                stock.localisation.city === city ? { ...stock, quantity } : stock
            );

            const updatedProduct = {...product, stocks: updatedStock};

            await axios.put(`${API_URL}/${productId}`, updatedProduct);

            return { productId, updatedStock };
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed Update Stock");
        }
    }
);




const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
        productDetails: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createProducts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
                state.error = false
            })
            .addCase(createProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetails = action.payload;
            })
            .addCase(getProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addStock.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStock.fulfilled, (state, action) => {
                state.loading = false;
                const { productId, stockData } = action.payload;
                const product = state.products.find(p => p.id === productId);
                if (product) {
                    product.stocks = [...product.stocks, stockData];
                }
            })
            .addCase(addStock.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateStockQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateStockQuantity.fulfilled, (state, action) => {
                state.loading = false;
                const { productId, updatedStock } = action.payload;
                const existingProduct = state.products.find(p => p.id === productId);
                if(existingProduct) {
                    existingProduct.stocks = updatedStock || [];
                }
            })
            .addCase(updateStockQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default productSlice.reducer;