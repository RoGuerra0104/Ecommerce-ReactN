import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'
import { fontSize } from "../global/fontSize"
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shopSlices"


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
        padding:15,
        paddingLeft:30,
        margin: 10,
        borderRadius:30
    },
    text: {
        textTransform: 'capitalize',
        fontSize: fontSize.text
    }
})