import { StyleSheet, FlatList} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'


const CategoriesScreen = ({navigation}) => {

    const categories = useSelector (state=>state.shopReducer.categories)

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        <FlatList style={style.category}
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const style = StyleSheet.create({
    category:{
        marginBottom:90
    }
})