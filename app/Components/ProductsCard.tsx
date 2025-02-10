import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface ProductsCardProps {
    type: string,
    price: number,
    src: string,
    name: string,
    quantity: number
}

function ProductsCard({ type, price, src, name, quantity}: ProductsCardProps) {
    return (
        <View style={{ backgroundColor: 'white', width: 185, height: 230, borderRadius: 20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#f7f7f7', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 20, borderColor: '#e6e6e6', borderWidth: 1 }}>
                    <Ionicons name={"flash"} size={15} color={"black"} />
                    <Text style={{ color: '#b3b3b3'}}>{type}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#f7f7f7', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 20, borderColor: '#e6e6e6', borderWidth: 1 }}>
                    <Ionicons name={"flash"} color={"black"} size={15} />
                    <Text style={{ color: '#b3b3b3'}}>{price}Dh</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#f7f7f7", width: '90%', marginHorizontal: 'auto', height: 130, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: '70%', height: '70%'}} source={src} />
            </View>
            <View style={{ width: '90%', marginHorizontal: 'auto', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{ fontWeight: 200, fontSize: 14}}>{quantity} Items</Text>
                    <Text style={{ fontWeight: 600, fontSize: 17}}>{name}</Text>
                </View>
                <Pressable>
                    <TouchableOpacity style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 5, borderRadius: 50}}>
                        <Ionicons name={"arrow-up"} color={"black"} size={20} />
                    </TouchableOpacity>
                </Pressable>
            </View>
        </View>
    );
}

export default ProductsCard;