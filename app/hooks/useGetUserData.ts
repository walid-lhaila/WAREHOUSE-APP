import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetUserData = () => {
    const [userData, setUserData] = useState<{ userId: string | null; secretKey: string | null }>({
        userId: null,
        secretKey: null,
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await AsyncStorage.getItem("userId");
                const secretKey = await AsyncStorage.getItem("secretKey");
                setUserData({ userId, secretKey });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return userData;
};

export default useGetUserData;
