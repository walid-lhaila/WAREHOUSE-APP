import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.9.132:3000/warehousemans";

interface LoginData {
    secretKey: string;
}

const initialState = {
    user: null,
    warehousemans: [],
    loading: false,
    error: null,
};


const storeUserData = async (id: string, secretKey: string) => {
    try {
        await AsyncStorage.setItem("userId", id);
        await AsyncStorage.setItem("secretKey", secretKey);
    } catch (error) {
        console.error("Error saving data to AsyncStorage:", error);
    }
};

export const login = createAsyncThunk(
    "auth/login",
    async (loginData: LoginData, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            const warehouseman = response.data.find((wh) => wh.secretKey === loginData.secretKey);
            if(!warehouseman) {
                console.log('Invalid SecretKey');
                return rejectWithValue("Invalid Secret Key");
            }

            await storeUserData(warehouseman.id, warehouseman.secretKey);

            return warehouseman;
        } catch (error) {
            console.error('Login Error', error);
            return rejectWithValue('Login Failed Please Try Again');
        }
    }

);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;
