import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                headerStyle: {
                    backgroundColor: "gray",
                },
                headerShadowVisible: false,
                headerTintColor: "black",
                tabBarStyle: {
                    width:'90%',
                    margin: 'auto',
                    backgroundColor: "green",
                    bottom: 20,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Products",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="stats"
                options={{
                    title: "Statistics",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "pie-chart" : "pie-chart-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

        </Tabs>
    );
}