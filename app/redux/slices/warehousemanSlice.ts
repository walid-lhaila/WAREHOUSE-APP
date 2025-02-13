import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = `${process.env.EXPO_PUBLIC_BACKEND_URL}/warehousemans`;


export const getAllWarehousemans = createAsyncThunk(
    "warehousemans/getAll",
    async () => {
        const response = await axios.get(API_URL);
        return response.data;
    }
)


const warehousemansSlice = createSlice({
    name: 'warehousemans',
    initialState: {
        warehousemans: [],
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllWarehousemans.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllWarehousemans.fulfilled, (state, action) => {
                state.loading = false;
                state.warehousemans = action.payload;
                state.error = null;
            })
            .addCase(getAllWarehousemans.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default warehousemansSlice.reducer;