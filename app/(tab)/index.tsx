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
import Filter from "@/app/Components/Filter";

function Index() {
    const [productForm, setProductForm] = useState(false);
    const [search, setSearch] = useState(false);
    const [filter, setFilter] = useState(null)
    const [productDetails, setProductDetails] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null)

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    const productsTotalQuantity = products.map((product) => {
        const totalQuantity = product.stocks ? product.stocks.reduce((sum, stock) => sum + stock.quantity, 0) : 0;
        return { ...product, totalQuantity };
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filterProduct = (products, filter) => {
        switch (filter) {
            case 'price-asc':
                return [...products].sort((a,b) => a.price - b.price);
            case 'price-desc':
                return [...products].sort((a,b) => b.price - a.price);
            case 'name':
                return [...products].sort((a,b) => a.name.localeCompare(b.name));
            case 'quantity':
                return [...products].sort((a,b) => b.totalQuantity - a.totalQuantity);
            default:
                return products;
        }
    };

    const filteredProducts = filterProduct(productsTotalQuantity, filter);

    return (
        productForm ? (
            <ProductForm onPress={() => setProductForm(false)} />
            ) : search ? (
                <Search close={() => setSearch(false)} />
            ) : productDetails ? (
                    <ProductsDetails productId={selectedProductId} onPress={() => {setProductDetails(false); setSelectedProductId(null)}} />
            ) : (
        <View style={{ flex: 1 }}>
            <Header onPress={() => setSearch(true)} />
            <SectionTitle onPress={() => setProductForm(true)} />
            <Filter setFilter={setFilter} />
                <FlatList
                    data={filteredProducts}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, padding: 5 }}>
                            <ProductsCard  onPress={() => {setProductDetails(true); setSelectedProductId(item.id);}} name={item.name} price={item.price} type={item.type} src={item.image} quantity={item.totalQuantity} key={item.id} />
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
        </View>
        )
    );
}

export default Index;

