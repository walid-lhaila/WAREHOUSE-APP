import React from 'react';
import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function StatsCard({ color, icon, text, count}) {
    return (
        <View style={{ backgroundColor: color, borderRadius: 20, width: '50%', height: 180, shadowOpacity: 0.5, shadowOffset: "bottom", shadowColor: 'green'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 15, paddingHorizontal: 15}}>
                <Ionicons name={icon} color={"white"} size={60} />
                
            </View>
            <View style={{ paddingTop: 25, paddingHorizontal: 15}}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 500, fontFamily: 'serif'}}>{text}</Text>
                <Text style={{ color: 'white', fontWeight: 400, fontSize: 20, paddingTop: 5}}>{count}</Text>
            </View>
        </View>
    );
}

export default StatsCard;