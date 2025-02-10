import React from 'react';
import {Text, View} from "react-native";
import Header from "@/app/Components/Header";
import {Ionicons} from "@expo/vector-icons";
import StatsCard from "@/app/Components/StatsCard";

function Stats() {
    return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
                    <Text style={{ color: 'black', fontFamily: 'serif', fontSize: 25, fontWeight: 'bold'}}>Statistics</Text>
                </View>
                <View style={{ paddingTop: 30}}>
                    <View style={{ width: '95%', height: 100, backgroundColor: '#254117', borderRadius: 20, marginHorizontal: 'auto', flexDirection: 'row', gap: 5, marginTop: 10}}>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5}}>
                                <Ionicons name={"flash"} color={"white"} size={60} />
                                <Text style={{ color: 'white', fontWeight: 500, fontSize: 20}}>Most recently</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 30, fontWeight: 700, fontFamily: 'serif', color: 'white'}}>48</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '95%', marginHorizontal: 'auto', flexDirection: 'row', gap: 5, marginTop: 10}}>
                        <StatsCard color="#004225" icon={"flash"} count={"120"} text={"Products"} />
                        <StatsCard color="#026C3D" icon={"home"} count={"120"} text={"Cities"} />
                    </View>
                    <View style={{ width: '95%', marginHorizontal: 'auto', flexDirection: 'row', gap: 5, marginTop: 10}}>
                        <StatsCard color="#437C17" icon={"flash"} count={"120"} text={"Out Of Stock"} />
                        <StatsCard color="#6AA121" icon={"flash"} count={"120"} text={"Stocks"} />
                    </View>
                </View>
            </View>
    );
}

export default Stats;