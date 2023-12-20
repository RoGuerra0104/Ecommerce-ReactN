import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
 

// Importamos vistas
import CategoriesScreen from "../screens/CategoriesScreen"
import ProductsByCategoryScreen from "../screens/ProductsByCategoryScreen"
import ProductDetailScreen from "../screens/ProductDetailScreen"
import Header from "../components/Header";

const Stack = createNativeStackNavigator()

const Navigator =()=>{
return(
    <NavigationContainer>
        <Stack.Navigator
            
        
        >
            <Stack.Screen
                name="Categorias"
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="Productos"
                component={ProductsByCategoryScreen}
            />
            <Stack.Screen
                name="Detalle"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}

export default Navigator