import { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import { EvilIcons, Entypo } from '@expo/vector-icons';


const Search = ({ onSearchHandlerEvent }) => {

  const [searchInput, setSearchInput] = useState("")
  const [error, setError] = useState("")


  const onSearchHandler = () => {
    const regEx = /[^\w\s]/
    if (regEx.test(searchInput)) {
      setError("Solo se admiten letras y números")
      setSearchInput("")
    } else {
      setError("")
      onSearchHandlerEvent(searchInput)
    }
  }


  const onResetSearchHandler = () => {
    setSearchInput("")
    onSearchHandlerEvent(searchInput)

  }



  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchInput}
          placeholder='Buscar...'
          value={searchInput}
        />
        <TouchableOpacity onPress={() => { onSearchHandler(searchInput) }}>
          <EvilIcons name="search" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onResetSearchHandler()}>
          <Entypo name="cross" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {
        error ?
          <View><Text>{error}</Text></View>
          :
          null
      }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textInput: {
    width: '80%',
    fontSize: 20
  },

})