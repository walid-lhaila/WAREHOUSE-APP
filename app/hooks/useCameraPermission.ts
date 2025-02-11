import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

export default function useCameraPermission() {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    return hasPermission;
}
