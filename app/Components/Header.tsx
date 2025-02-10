import React from 'react';
import {Image, Pressable, StyleSheet, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import logo from "../../assets/images/logo1.png"


function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={logo} />
            <Pressable>
                <Ionicons name={"search-outline"} color={"white"} size={35} />
            </Pressable>
        </View>
    );
}

export default Header;



const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        backgroundColor: 'green',
        opacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    logo: {
        width: 100,
        height: 70,
        paddingTop: 16,
    },
})