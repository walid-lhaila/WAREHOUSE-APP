import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function Filter({setFilter}) {
    return (
        <View style={{ backgroundColor: 'white', paddingVertical: 10, marginBottom: 10, width: '95%', marginHorizontal: 'auto', borderRadius: 20, shadowColor: 'gray', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.3, shadowRadius: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8}}>
                <TouchableOpacity onPress={() => setFilter('price-desc')} style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 10, borderColor: 'gray'}}>
                    <Text style={{ color: 'gray', fontWeight: 500}}>Price</Text>
                    <Ionicons name={"arrow-up"} color={"gray"} size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('price-asc')} style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 10, borderColor: 'gray'}}>
                    <Text style={{ color: 'gray', fontWeight: 500}}>Price</Text>
                    <Ionicons name={"arrow-down"} color={"gray"} size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('name')} style={{ backgroundColor: '#eeeeee', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10, borderColor: 'gray'}}>
                    <Text style={{ color: 'gray', fontWeight: 500}}>A-Z</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('quantity')} style={{ backgroundColor: '#eeeeee', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10, borderColor: 'gray'}}>
                    <Text style={{ color: 'gray', fontWeight: 500}}>Quantity</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Filter;