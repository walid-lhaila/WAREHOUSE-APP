import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import nido from "../../assets/images/nido.png";

function ProductsDetails({onPress}) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Pressable onPress={onPress}>
                    <Ionicons name={"arrow-undo"} color={"white"} size={35} />
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#f7f7f7', width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', marginHorizontal: 'auto'}}>
                <Image style={{ width: '50%', height: '90%'}} source={nido}/>
            </View>
            <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 5}}>
                            <Ionicons name={"cube"} color={"black"} size={25} />
                            <Text style={{ fontSize: 28, fontWeight: 600, fontFamily: 'serif'}}>Nido</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 5}}>
                            <Ionicons name={"pricetag"} color={"black"} size={25} />
                            <Text style={{ fontSize: 25, fontWeight: 400, fontFamily: 'serif'}}>Informatique</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 5}}>
                            <Ionicons name={"business"} color={"black"} size={25} />
                            <Text style={{ fontSize: 25, fontWeight: 400, fontFamily: 'serif'}}>Hp</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 5}}>
                            <Ionicons name={"ticket"} color={"black"} size={25} />
                            <Text style={{ fontSize: 25, fontWeight: 400, fontFamily: 'serif'}}>1999 Dh</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', borderWidth: 1, width: 100, alignItems: 'center', marginTop: 10, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20}}>
                    <Text style={{ color: 'gray', fontSize: 20, fontWeight: 400}}>Stocks</Text>
                </View>
                <View style={{ marginTop: 10}}>
                    <View style={{ backgroundColor: '#F5F5F5', width: '100%', paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 20, marginHorizontal: 'auto', shadowColor: "gray", shadowOffset: { width: 0, height: 5}, shadowOpacity: 0.8, shadowRadius: 2}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Ionicons name={"home"} size={50} color={"gray"} />
                            <Text style={{ color: 'gray', fontSize: 30, fontWeight: 'bold'}}>Safi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems:' center', gap: 5}}>
                            <Ionicons name={"wallet"} color={"gray"} size={20} />
                            <Text>498 Q</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProductsDetails;

const styles = StyleSheet.create({
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
})