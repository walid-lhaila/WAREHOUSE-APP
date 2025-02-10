import React, {useState} from 'react';
import {FlatList, ScrollView, View} from "react-native";
import Header from "@/app/Components/Header";
import SectionTitle from "@/app/Components/SectionTitle";
import ProductsCard from "@/app/Components/ProductsCard";
import nido from "../../assets/images/nido.png"
import ProductForm from "@/app/Components/ProductForm";
import Search from "@/app/Components/Search";

const products = [
    { id: '1', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 },
    { id: '2', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 },
    { id: '3', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 },
    { id: '4', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 },
    { id: '5', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 },
    { id: '6', src: nido, name: "Nido", type: "Nutrition", price: "250", quantity: 120 }
];

function Index() {
    const [productForm, setProductForm] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        productForm ? (
            <ProductForm onPress={() => setProductForm(false)} />
            ) : search ? (
                <Search close={() => setSearch(false)} />
            ) : (
        <View style={{ flex: 1 }}>
            <Header onPress={() => setSearch(true)} />
            <SectionTitle onPress={() => setProductForm(true)} />
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, padding: 5 }}>
                            <ProductsCard {...item} />
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
        </View>
        )
    );
}

export default Index;

