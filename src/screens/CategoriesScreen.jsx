import { StyleSheet, FlatList } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useGetCategoriesQuery } from '../services/shopService'



const CategoriesScreen = ({ navigation }) => {

    const { data, isLoading, error } = useGetCategoriesQuery()


    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return (
        <>
            <FlatList style={style.category}
                data={data}
                renderItem={renderCategoryItem}
                keyExtractor={item => item}
            />
        </>
    )
}

export default CategoriesScreen

const style = StyleSheet.create({
    category: {
        marginBottom: 90
    }
})