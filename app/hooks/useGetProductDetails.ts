import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductDetails} from "@/app/redux/slices/productsSlice";


const useGetProductDetails = (productId) => {
    const dispatch = useDispatch();
    const { productDetails, loading } = useSelector((state) => state.products);

    useEffect(() => {
        if(productId) {
            dispatch(getProductDetails(productId));
        }
    }, [dispatch, productId]);

    return { productDetails, loading, productId}

};

export default useGetProductDetails;