import { useState } from "react";

export default function useBarcodeScanner(setProduct) {
    const [scanning, setScanning] = useState(false);

    const handleBarCodeScanned = ({ data }) => {
        setScanning(false);
        setProduct((prev) => ({ ...prev, barcode: data }));
    };

    return { scanning, setScanning, handleBarCodeScanned };
}
