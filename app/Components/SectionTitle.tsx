import React from 'react';
import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function SectionTitle({ onPress }) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
            <Text style={{ color: 'black', fontFamily: 'serif', fontSize: 25, fontWeight: 'bold'}}>Products</Text>
            <Pressable onPress={onPress} style={{backgroundColor: 'green', paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50}}>
                <Ionicons name={"add"} color={"white"} size={24} />
            </Pressable>
        </View>
    );
}

export default SectionTitle;