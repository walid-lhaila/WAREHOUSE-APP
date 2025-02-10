import React from 'react';
import {Text, View} from "react-native";
import Header from "@/app/Components/Header";

function Stats() {
    return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
                    <Text style={{ color: 'black', fontFamily: 'serif', fontSize: 25, fontWeight: 'bold'}}>Statistics</Text>
                </View>
            </View>
    );
}

export default Stats;