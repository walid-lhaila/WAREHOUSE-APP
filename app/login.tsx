import {
    ImageBackground,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Alert,
} from "react-native";
import bg from "../assets/images/bg3.jpeg";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Input from "@/app/Components/Input";
import { useDispatch } from "react-redux";
import {useState} from "react";
import {login} from "@/app/redux/slices/AuthSlice";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");

function Login() {
    const Router = useRouter();
    const dispatch = useDispatch();
    const [secretKey, setSecretKey] = useState("");


    const handleLogin = async () => {
        if (!secretKey.trim()) {
            Alert.alert("Error", "Enter Your Secret Key");
            return;
        }

        try {
            await dispatch(login({ secretKey })).unwrap();
            Router.push("(tab)");
        } catch (err) {
            Alert.alert("Erreur", err || "Clé secrète invalide !");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={bg} style={styles.backgroundImage} resizeMode="cover" />
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.content}>
                        <Text style={styles.text}>Hello</Text>
                        <Text style={styles.subText}>Sign in to your account</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                placeHolder="Password"
                                iconName="lock-closed"
                                onChangeText={setSecretKey}
                                value={secretKey}
                            />
                            <Text style={styles.forgotPassword}>Forgot your password ?</Text>
                            <Pressable onPress={handleLogin} style={styles.signInContainer}>
                                <Text style={styles.signInText}>Sign In</Text>
                                <LinearGradient colors={["#1d976c", "#93F9B9"]} style={styles.gradientButton}>
                                    <Ionicons name="arrow-forward" size={20} color="white" />
                                </LinearGradient>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: "absolute",
        width: width,
        height: height,
        top: 0,
        left: 0,
    },
    safeArea: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    content: {
        width: "75%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "black",
        fontSize: 45,
        fontWeight: "bold",
    },
    subText: {
        paddingVertical: 20,
        fontSize: 15,
        fontWeight: "400",
    },
    inputContainer: {
        width: "100%",
        paddingVertical: 20,
    },
    forgotPassword: {
        color: "#b3b3b3",
        paddingTop: 20,
        textAlign: "right",
    },
    signInContainer: {
        flexDirection: "row",
        gap: 10,
        paddingTop: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    signInText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    gradientButton: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
    },
    createAccountText: {
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 80,
    },
});
