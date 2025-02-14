import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { createProducts } from "@/app/redux/slices/productsSlice";
import useGetUserData from "@/app/hooks/useGetUserData";

export default function useProductForm(onPress) {
    const dispatch = useDispatch();
    const warehouseman = useGetUserData();

    const [product, setProduct] = useState({
        name: "",
        type: "",
        price: "",
        solde: "",
        supplier: "",
        barcode: "",
        image: "",
    });

    const handleChange = (key, value) => {
        setProduct((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!product.name || !product.barcode || !product.price || !product.solde || !product.type || !product.supplier) {
            Alert.alert("Error", "Please fill in all required fields.");
            return;
        }
        if (!warehouseman) {
            Alert.alert("Error", "User not authenticated.");
            return;
        }
        try {
            const newProduct = {
                ...product,
                editedBy: [
                    {
                        warehousemanId: warehouseman.userId,
                        at: new Date().toISOString().split("T")[0],
                    },
                ],
            };
            dispatch(createProducts(newProduct)).unwrap();
            Alert.alert("Success", "Product added successfully!");
            onPress();
        } catch (error) {
            Alert.alert("Error", error || "Failed to add product.");
        }
    };

    return { product, setProduct, handleChange, handleSubmit };
}
