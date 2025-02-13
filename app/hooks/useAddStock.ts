import { useDispatch } from "react-redux";
import { addStock, getProductDetails } from "@/app/redux/slices/productsSlice";
import useGetUserData from "@/app/hooks/useGetUserData";

const useAddStock = (productId, onSuccess) => {
    const dispatch = useDispatch();
    const warehouseman = useGetUserData();

    const handleAddStock = async (stockName, quantity, city) => {
        try {
            const productDetails = await dispatch(getProductDetails(productId)).unwrap();

            const newStock = {
                id: Date.now(),
                name: stockName,
                quantity: parseInt(quantity),
                localisation: { city },
            };

            const warehousemanId = Number(warehouseman.userId);

            const existingEditorIndex = productDetails.editedBy.findIndex(
                (editor) => Number(editor.warehousemanId) === warehousemanId
            );

            let updatedEditedBy = [...productDetails.editedBy];

            if (existingEditorIndex !== -1) {
                updatedEditedBy[existingEditorIndex].at = new Date().toISOString().split("T")[0];
            } else {
                updatedEditedBy.push({
                    warehousemanId,
                    at: new Date().toISOString().split("T")[0],
                });
            }

            const updatedProduct = {
                ...productDetails,
                stocks: [...productDetails.stocks, newStock],
                editedBy: updatedEditedBy,
            };

            await dispatch(addStock({ productId, updatedProduct }));
            console.log("Stock added successfully");

            await dispatch(getProductDetails(productId));

            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error("Stock addition failed:", error);
        }
    };

    return { handleAddStock };
};

export default useAddStock;
