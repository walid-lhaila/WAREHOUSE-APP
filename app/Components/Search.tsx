import React from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ProductsCard from "@/app/Components/ProductsCard";
import nido from "../../assets/images/nido.png"

function Search({ close }) {
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
                    <TextInput style={{width: '76%', fontSize: 17, fontFamily: 'mono', color: 'white'}} keyboardType="default" placeholder="Search Products..."  placeholderTextColor="#888B90" />
                    <Ionicons name={'mic-sharp'} color={'#888B90'} size={32} />
                </View>
                <ScrollView contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 5 }}>
                    <ProductsCard type={"Nutrition"} price={1200} src={nido} name={"Nido"} quantity={100} />
                </ScrollView>
            </View>
        </View>
    );
}

export default Search;