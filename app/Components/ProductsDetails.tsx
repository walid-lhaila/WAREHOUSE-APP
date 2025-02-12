import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect} from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "@/app/redux/slices/productsSlice";

interface ProductDetailsProps {
    productId: string;
    onPress: () => void;
}

const ProductDetails = ({onPress, productId}: ProductDetailsProps) => {
    const dispatch = useDispatch();
    const { productDetails, loading } = useSelector((state) => state.products);
    const totalStock = productDetails?.stocks?.reduce((total, stock) => total + stock.quantity, 0) || 0;

    useEffect(() => {
        if(productId) {
            dispatch(getProductDetails(productId));
        }
    }, [dispatch, productId]);


    if (loading || !productDetails) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1}}>
            <View style={{ width: '100%', paddingTop: 50, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: 'green' }}>
                <TouchableOpacity onPress={onPress} style={{ width: '16%', paddingLeft: 3 }}>
                    <Ionicons name={"arrow-undo"} color={"white"} size={30} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7', marginHorizontal: 'auto', }}>
                    <Image
                        style={{ width: '50%', height: '84%', alignItems: 'center',}}
                        source={{uri: productDetails.image}}
                    />
                </View>
                <View style={{ paddingTop: 15}}>
                    <View style={{ width: '100%', height: 45, flexDirection: 'row', alignItems: 'center', paddingLeft: '10' }}>
                        <Entypo name="location-pin" size={34} color="green" />
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Marrakesh  , Gueliz B2</Text>
                    </View>
                    <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>{productDetails.name}</Text>
                        <Text style={{ fontSize: 16, color: 'gray' }}> ( {productDetails.type} )</Text>
                    </View>
                    <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                    <View style={{ width: '30%', height: 90, backgroundColor: '#f7f7f7', overflow: 'hidden', borderRadius: 20 }}>
                        <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Entypo name="price-tag" size={24} color="green" />
                            <Text style={{ fontSize: 17, fontWeight: '600' }}>Price</Text>
                        </View>
                        <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
                                {productDetails.price} DH
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '30%', height: 90, backgroundColor: '#f7f7f7', overflow: 'hidden', borderRadius: 20, marginLeft: 15 }}>
                        <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <AntDesign name="arrowdown" size={24} color="green" />
                            <Text style={{ fontSize: 17, fontWeight: '600' }}>Solde</Text>
                        </View>
                        <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
                                {productDetails.solde} DH
                            </Text>

                        </View>
                    </View>
                    <View style={{ width: '30%', height: 90, backgroundColor: '#f7f7f7', overflow: 'hidden', borderRadius: 20, marginLeft: 15 }}>
                        <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <MaterialIcons name="production-quantity-limits" size={24} color="green" />
                            <Text style={{ fontSize: 17, fontWeight: '600' }}>Quantity</Text>
                        </View>
                        <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
                                {totalStock} Q
                            </Text>

                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Barcode :  </Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}> {productDetails.barcode}</Text>
                </View>
                <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Supplier :  </Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>{productDetails.supplier}</Text>
                </View>

                <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
                    </View>
                </View>

                {productDetails.editedBy?.map((wh) => (
                    <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Edite By :  </Text>
                        <Text key={wh.warehousemanId} style={{ fontSize: 16, color: 'gray' }}>{wh.warehousemanId} at {wh.at}</Text>
                    </View>
                ))}

                <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
                    </View>
                </View>

                <View style={{ width: '100%', height: 75, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, paddingLeft: 10, marginTop: 10 }}>
                    <TouchableOpacity  style={{ width: '30%', height: '80%', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'green' }}>
                        <FontAwesome name="plus" size={34} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ width: '30%', height: '80%', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#306EFF' }}>
                        <FontAwesome name="edit" size={34} color="#306EFF" />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ width: '30%', height: '80%', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                        <FontAwesome name="trash" size={34} color="red" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
})