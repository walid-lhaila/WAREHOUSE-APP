import React, {useState} from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function QuantityForm({ close }) {
    const [quantity, setQuantity] = useState('');

    return (
        <Modal  transparent  animationType="fade"  visible={true}  onRequestClose={close}>
            <TouchableWithoutFeedback onPress={close}>
                <View style={styles.overlay}>
                    <View style={styles.card} onStartShouldSetResponder={() => true}>
                        <Text style={styles.title}>Update Quantity</Text>

                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
                            <View style={{ width: '85%'}}>
                                <TextInput style={styles.input} placeholder="Select City" placeholderTextColor="#888" />
                                <TextInput style={styles.input} placeholder="Enter quantity" keyboardType="numeric" placeholderTextColor="#888" value={quantity} onChangeText={setQuantity}/>
                            </View>

                            <View style={{ borderWidth: 3, borderColor: 'green', paddingHorizontal: 5, paddingVertical: 4, borderRadius: 50, marginBottom: 15}}>
                                <FontAwesome name="check" size={34} color="green" />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                            <TouchableOpacity style={{ borderColor: '#306EFF', borderWidth: 3, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 50,}}>
                                <Ionicons color={"#306EFF"} size={30} name={"add"} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderColor: 'red', borderWidth: 3, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 50,}}>
                                <Ionicons color={"red"} size={30} name={"remove"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

export default QuantityForm;


const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    card: {
        backgroundColor: '#d5d6d3',
        width: '90%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Georgia',
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 8,
        marginBottom: 20,
    },
});