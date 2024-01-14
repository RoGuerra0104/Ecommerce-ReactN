import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import ProductItem from '../components/ProductItem'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategoryScreen = ({navigation, route}) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')


    const category = useSelector(state=>state.shopReducer.categorySelected)
    

    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)

    useEffect(()=>{
        //const productsFilteredByCategory = products_data.filter(product=>product.category===category)
        if(!isLoading){
            const productsValues = Object.values(productsFilteredByCategory)
            const productsFiltered = productsValues.filter(
            product=>product.title.toLowerCase().includes(search.toLowerCase()))
            setProductsByCategory(productsFiltered)
        }
        
    },[isLoading, category, search])

    const renderProductItem = ({item}) => (
        <ProductItem product={item} navigation={navigation}  />
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return(
        <>
        {
            isLoading
            ?
            <ActivityIndicator />
            :
            <>
                <Search onSearchHandlerEvent ={onSearch} />
                <FlatList style={styles.productDetail}
                    data={productsByCategory}
                    renderItem={renderProductItem}
                    keyExtractor={item=>item.id}
                />
            </>
        }
        </>
    )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
    productDetail:{
        marginBottom: 100
    }
})