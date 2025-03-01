import React, {useRef} from 'react';
import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Input from "@/app/Components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {Camera, CameraView} from 'expo-camera';
import useCameraPermission from "@/app/hooks/useCameraPermission";
import useProductForm from "@/app/hooks/useProductForm";
import useBarcodeScanner from "@/app/hooks/useBarcodeScanner";

function ProductForm({ onPress }) {
    const cameraRef = useRef(null);
    const hasPermission = useCameraPermission();
    const { product, setProduct, handleChange, handleSubmit } = useProductForm(onPress);
    const { scanning, setScanning, handleBarCodeScanned } = useBarcodeScanner(setProduct);
    console.log(product.barcode);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Pressable onPress={onPress}>
                    <Ionicons name={"arrow-undo"} color={"white"} size={35} />
                </Pressable>
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>Create New Product</Text>
                <View style={{ width: '100%', paddingVertical: 20 }}>
                    <Input placeHolder="Name" iconName="cube-outline" onChangeText={(text) => handleChange("name", text) }/>
                    <Input placeHolder="Type" iconName="list-outline" onChangeText={(text) => handleChange("type", text)}  />
                    <Input placeHolder="Price" iconName="pricetag-outline" onChangeText={(text) => handleChange("price", text)}  />
                    <Input placeHolder="Solde" iconName="wallet-outline" onChangeText={(text) => handleChange("solde", text)}  />
                    <Input placeHolder="Supplier" iconName="business-outline"  onChangeText={(text) => handleChange("supplier", text)} />
                    <Input placeHolder={product.barcode} iconName="barcode-outline"  onChangeText={(text) => handleChange("barcode", text)} value={product.barcode} />
                    <Input placeHolder="Image URL" iconName="image-outline" keyboardType="url"  onChangeText={(text) => handleChange("image", text)} />
                    <View style={{ flexDirection: 'row', gap: 10, paddingTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient colors={['green', '#93F9B9']} style={styles.button}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Create</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['green', '#93F9B9']} style={styles.iconButton}>
                            <TouchableOpacity onPress={() => setScanning(true)}>
                                <Ionicons name={'scan-outline'} size={30} color={'white'} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            {scanning && hasPermission && (
                <Modal visible={scanning} animationType="slide" transparent={false}>
                        <View style={styles.scannerContainer}>
                            <CameraView
                                ref={cameraRef}
                                style={StyleSheet.absoluteFillObject}
                                onBarcodeScanned={handleBarCodeScanned}
                                ratio="16:9"
                            />
                            <TouchableOpacity style={styles.closeButton} onPress={() => setScanning(false)}>
                                <Ionicons name="close-circle-outline" size={40} color="white" />
                            </TouchableOpacity>
                        </View>
                    </Modal>
            )}
        </View>
    );
}

export default ProductForm;

const styles = StyleSheet.create({
    content: {
        width: '75%',
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    iconButton: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 15,
    },
    header: {
        paddingTop: 60,
        backgroundColor: 'green',
        opacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    scannerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    closeButton: {
        position: "absolute",
        top: 50,
        right: 20,
    },
});