import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'
import { fontSize } from "../global/fontSize"
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shops-slices"


const CategoryItem = ({ category, navigation }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Productos", { category })
            dispatch(setCategorySelected(category))
        }
        }>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: fontSize.text
    }
})