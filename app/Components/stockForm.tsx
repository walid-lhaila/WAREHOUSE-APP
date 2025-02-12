import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Input from "@/app/Components/Input";
import {LinearGradient} from "expo-linear-gradient";

function StockForm({onPress}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Pressable onPress={onPress}>
                    <Ionicons name={"arrow-undo"} color={"white"} size={35} />
                </Pressable>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Add stock for this product</Text>
                <View style={{ width: '100%', paddingVertical: 20 }}>
                    <Input placeHolder="Name" iconName="cube-outline" />
                    <Input placeHolder="Quantity" iconName="list-outline" />
                    <Input placeHolder="City" iconName="home-outline" />
                    <View style={{ flexDirection: 'row', gap: 10, paddingTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient colors={['green', '#93F9B9']} style={styles.button}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>Create</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default StockForm;

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
    content: {
        width: '75%',
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'black',
        fontSize: 23,
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
});