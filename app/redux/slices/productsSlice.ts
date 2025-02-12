import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://192.168.9.132:3000/products";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
        async () => {
        const response = await axios.get(API_URL);
        return response.data;

        }
    );

export const createProducts = createAsyncThunk(
    "products/create",
    async (newProduct, {dispatch}) => {
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
)

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

    },
});

export default productSlice.reducer;