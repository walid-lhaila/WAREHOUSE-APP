import React from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "@/app/Components/Header";
import Input from "@/app/Components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

function ProductForm({ onPress }) {
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
                    <Input placeHolder="Name" iconName="cube-outline" />
                    <Input placeHolder="Type" iconName="list-outline" />
                    <Input placeHolder="Price" iconName="pricetag-outline" />
                    <Input placeHolder="Solde" iconName="wallet-outline" />
                    <Input placeHolder="Supplier" iconName="business-outline" />
                    <Input placeHolder="Barcode" iconName="barcode-outline" />
                    <Input placeHolder="Image URL" iconName="image-outline" keyboardType="url" />
                    <View style={{ flexDirection: 'row', gap: 10, paddingTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient colors={['green', '#93F9B9']} style={styles.button}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>Create</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['green', '#93F9B9']} style={styles.iconButton}>
                            <TouchableOpacity>
                                <Ionicons name={'scan-outline'} size={30} color={'white'} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
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

});