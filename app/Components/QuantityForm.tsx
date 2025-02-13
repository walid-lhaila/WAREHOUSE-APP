import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Picker} from "@react-native-picker/picker";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails, updateStockQuantity} from "@/app/redux/slices/productsSlice";

function QuantityForm({ close, cities, productId }) {
    const dispatch = useDispatch();
    const [selectedCity, setSelectedCity] = useState('');
    const selectedCityData = cities.find(city => city.localisation.city === selectedCity) || {};
    const [quantity, setQuantity] = useState(selectedCityData.quantity || 0);
    const [intervalId, setIntervalId] = useState(null);

    const {products} = useSelector((state) => state.products);

    const handleCityChange = (cityName) => {
        setSelectedCity(cityName);
        const city = cities.find(c => c.localisation.city === cityName);
        setQuantity(city?.quantity || 0);
    };

    const handlePlus = () => setQuantity((prev) => prev + 1);
    const handleLess = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

    const startPlus = () => {
        const id = setInterval(() => setQuantity((prev) => prev + 1), 2);
        setIntervalId(id);
    };

    const startLess = () => {
        const id = setInterval(() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0)), 2);
        setIntervalId(id);
    };

    const stopChanging = () => {
        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const handleUpdatedStock = async () => {
        if(! selectedCity || !productId ) return;
            try {
               await dispatch(updateStockQuantity({
                    productId: productId,
                    city: selectedCity,
                    quantity
                })).unwrap();
               await dispatch(getProductDetails(productId))
                console.log('Stock Updated Success');
               close();
            } catch (error) {
                console.log('Failed Update Stock')
            }
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={close} style={styles.backButton}>
                    <Ionicons name={"arrow-undo"} color={"white"} size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Update Quantity</Text>

                <View style={styles.formContainer}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedCity}
                            onValueChange={handleCityChange}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select City" color={'black'} value="" />
                            {cities.map((city, index) => (
                                <Picker.Item
                                    color={'black'}
                                    key={index}
                                    label={city.localisation.city}
                                    value={city.localisation.city}
                                />
                            ))}
                        </Picker>
                    </View>

                    <Text style={styles.quantityText}>{quantity}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            onPress={handlePlus}
                            onLongPress={startPlus}
                            onPressOut={stopChanging}
                            style={styles.addButton}
                        >
                            <Ionicons color={"#306EFF"} size={30} name={"add"} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleLess}
                            onLongPress={startLess}
                            onPressOut={stopChanging}
                            style={styles.removeButton}
                        >
                            <Ionicons color={"red"} size={30} name={"remove"} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.checkButton} onPress={handleUpdatedStock}>
                        <FontAwesome name="check" size={34} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default QuantityForm;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    backButton: {
        width: '16%',
        paddingLeft: 3
    },
    card: {
        backgroundColor: '#f7f7f7',
        width: '90%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Georgia',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    quantityText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10
    },
    pickerContainer: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    addButton: {
        borderColor: '#306EFF',
        borderWidth: 3,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 50,
    },
    removeButton: {
        borderColor: 'red',
        borderWidth: 3,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 50,
    },
    checkButton: {
        borderWidth: 3,
        borderColor: 'green',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 50,
    }
});
