import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


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
    <TabNavigator/>
    </Provider>
  );



}
