import { ActivityIndicator } from 'react-native';
// import CategoriesScreen from './src/screens/CategoriesScreen'
// import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import Navigator from './src/navigation/Navigator';
import { useFonts } from 'expo-font';
import { useState } from 'react';



export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  console.log("categoria seleccionada:", categorySelected)

  const [fontLoader] = useFonts({
    "Karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
    "Karla-Bold": require("./assets/fonts/Karla-Bold.ttf")
  })

  if (!fontLoader) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <Navigator/>
    // <>
    // {
    //   categorySelected
    //     ?
    //     <ProductsByCategoryScreen category={categorySelected} />
    //     :
    //     <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    // }
    // </>
  );



}
