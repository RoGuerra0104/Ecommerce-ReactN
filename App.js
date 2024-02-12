import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/db';



export default function App() {
  
  init()
  .then(()=>console.log("db inicializada"))
  .catch((error)=>console.log(error.message))

  const [fontLoader] = useFonts({
    "Karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
    "Karla-Bold": require("./assets/fonts/Karla-Bold.ttf")
  })

  if (!fontLoader) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <Provider store={store}>    
    <MainNavigator/>
    </Provider>
  );



}
