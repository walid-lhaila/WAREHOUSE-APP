import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from "react-native";
import Header from "@/app/Components/Header";
import SectionTitle from "@/app/Components/SectionTitle";
import ProductsCard from "@/app/Components/ProductsCard";
import ProductForm from "@/app/Components/ProductForm";
import Search from "@/app/Components/Search";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/app/redux/slices/productsSlice";
import ProductsDetails from "@/app/Components/ProductsDetails";

function Index() {
    const [productForm, setProductForm] = useState(false);
    const [search, setSearch] = useState(false);
    const [productDetails, setProductDetails] = useState(false);

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        productForm ? (
            <ProductForm onPress={() => setProductForm(false)} />
            ) : search ? (
                <Search close={() => setSearch(false)} />
            ) : productDetails ? (
                    <ProductsDetails onPress={() => setProductDetails(false)} />
            ) : (
        <View style={{ flex: 1 }}>
            <Header onPress={() => setSearch(true)} />
            <SectionTitle onPress={() => setProductForm(true)} />
                <FlatList
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, padding: 5 }}>
                            <ProductsCard onPress={() => setProductDetails(true)} name={item.name} price={item.price} type={item.type} src={item.image} quantity={item.price} key={item.id} />
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
        </View>
        )
    );
}

export default Index;

