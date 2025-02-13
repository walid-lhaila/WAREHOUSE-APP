import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ProductsCard from "@/app/Components/ProductsCard";
import {useDispatch, useSelector} from "react-redux";


function Search({ close }) {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [typingTimeout, setTypingTimeout] = useState(null);


    useEffect(() => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            const filtered = products.filter(product => {
                const searchString = searchQuery.toLowerCase();
                return (
                    product.name.toLowerCase().includes(searchString) ||
                    product.type.toLowerCase().includes(searchString) ||
                    product.price.toString().includes(searchQuery)
                );
            });
            setFilteredProducts(filtered);
        }, 100);

        setTypingTimeout(timeout);

        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, [searchQuery]);

    return (
        <View>
            <View style={{height: '100%', width: '100%'}}>
                <View style={{paddingTop: 50, paddingVertical: 15, backgroundColor: 'green'}}>
                    <Pressable onPress={close} style={{ paddingHorizontal: 10, marginTop: 10}}>
                        <Ionicons name={'arrow-back'} color="white" size={28} />
                    </Pressable>
                </View>
                <View style={{backgroundColor: 'white', width: '95%', marginHorizontal: 'auto', marginTop: 20, borderRadius: 20, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <Ionicons name={"search-sharp"} color={'#888B90'} size={32} />
                    <TextInput style={{width: '76%', fontSize: 17, fontFamily: 'mono', color: 'black'}} keyboardType="default" placeholder="Search Products..." value={searchQuery} onChangeText={setSearchQuery}  placeholderTextColor="#888B90" />
                    <Ionicons name={'mic-sharp'} color={'#888B90'} size={32} />
                </View>
                <FlatList data={filteredProducts}  keyExtractor={(item) => item.id} numColumns={2}  renderItem={({ item }) => (
                    <View style={{paddingHorizontal: 5, paddingVertical: 5, marginTop: 10}}>
                        <ProductsCard type={item.type} price={item.price} src={item.image} name={item.name} quantity={item.solde} />
                    </View>
                    )}
                      ListEmptyComponent={
                          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                              <Text style={{ fontSize: 18, color: 'gray' }}>
                                  No products found
                              </Text>
                          </View>
                      }
                />
            </View>
        </View>
    );
}

export default Search;