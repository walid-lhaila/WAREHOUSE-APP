import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllWarehousemans} from "@/app/redux/slices/warehousemanSlice";


const useGetAllWarehousemans = () => {
    const dispatch = useDispatch();
    const {warehousemans} = useSelector((state) => state.warehousemans);


    useEffect(() => {
        if(warehousemans) {
            dispatch(getAllWarehousemans());
        }
    }, [dispatch]);

    return warehousemans;

}
export default useGetAllWarehousemans;