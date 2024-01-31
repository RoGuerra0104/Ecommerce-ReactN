import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'


const CartScreen = () => {

  const cartItem = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const localId = useSelector(state=>state.authReducer.localId)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    const createdAt = Date.now()
    triggerPost({ total, cartItem, localId:localId, createdAt:createdAt})
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItem}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total:  ${total} </Text>
        <TouchableOpacity style={styles.confirmButton}
          onPress={confirmCart}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Karla-Bold'
  },
  confirmButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    color: '#fff'
  }
})

