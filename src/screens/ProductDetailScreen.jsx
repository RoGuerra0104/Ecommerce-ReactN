import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { addItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';



const ProductDetailScreen = ({ route }) => {
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)
    const [quantity, setQuantity] = useState(1);

    const { height, width } = useWindowDimensions()

    const productId = route.params

    useEffect(() => {
        height < width ? setIsPortrait(false) : setIsPortrait(true)
    }, [height])


    useEffect(() => {
        const productFound = products_data.find(product => product.id === productId)
        setProductSelected(productFound)
        setIsLoading(false)
    }
        , [productId])


    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addItem({ ...productSelected, quantity: quantity }))
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }


    return (
        <>
            {
                isLoading
                    ?
                    <ActivityIndicator />
                    :
                    <>

                        <ScrollView >
                            <Image
                                source={{ uri: productSelected.images[0] }}
                                resizeMode='cover'
                                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                            />
                            <View style={styles.detailContainer}>
                                <Text style={styles.title}>{productSelected.title}</Text>
                                <Text style={styles.description}>{productSelected.description}</Text>
                                <Text style={styles.price}>$ {productSelected.price}</Text>
                                <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                                    <Text style={styles.quantityButtonText}><Ionicons name="remove-circle-sharp" size={40} color="red" /></Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                                    <Text style={styles.quantityButtonText}><Ionicons name="add-circle-sharp" size={40} color="green" /></Text>
                                </TouchableOpacity>
                            </View>
                                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                                    <Text style={styles.buyText}>Agregar al Carrito</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </>
            }

        </>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({

    imageProduct: {
        width: '100%',
        height: 200,
    },
    imageProductLandscape: {
        width: '100%',
        height: 300,
    },
    detailContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    quantityContainer: {
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityButton: {
        borderRadius: 20,
        padding: 20,
    },
    quantityButtonText: {
        fontSize: 30,
        color: '#555',
    },
    quantity: {
        fontSize: 20,
    },
    buyButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buyText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})