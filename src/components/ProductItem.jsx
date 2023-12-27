import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { fontSize } from '../global/fontSize'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shops-slices'



const ProductItem = ({ product, navigation }) => {

    const dispatch = useDispatch()

    return (
        <Card style={styles.cardContainer}>
            <TouchableOpacity style={styles.conatinerProductItem} 
            onPress={() => {
                dispatch(setProductIdSelected(product.id))
                navigation.navigate("Detalle", product.id)
            }
            }
            >
                <View style={styles.productPrice}>
                    <Text style={styles.ProductTitle}> {product.title} </Text>
                    <Text style={styles.productPrecio}>${product.price}</Text>
                </View>
                <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail }}
                />

            </TouchableOpacity></Card>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
    },
    conatinerProductItem: {

        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 10,
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,

        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    ProductTitle: {
        fontSize: fontSize.text,
        fontFamily: "Karla-Bold"
    },
    productImage: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 60,
        height: 60
    },

})