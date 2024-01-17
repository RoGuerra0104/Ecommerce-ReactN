import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';


export default function App() {
  

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
