import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

const ProductItem = ({product, onSelectProductIdEvent}) => {
  return (
    <TouchableOpacity onPress={()=>onSelectProductIdEvent(product.id)} style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{uri: product.thumbnail }}
        />
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 10,
        },
        elevation: 5,
        shadowOpacity: 1, 
        shadowRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        margin:10,
        
    },
    productTitle:{
        fontSize:20,
        fontFamily:"Karla-Bold"
    },
    productImage:{
        width:60,
        height:60,
    }
})