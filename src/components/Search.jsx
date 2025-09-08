import { StyleSheet, Text, TextInput, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/EvilIcons'
import { colors } from '../global/colors'


const Search = ({setKeyword}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
      style={styles.searchInput}
      placeholder='Buscar'
      onChangeText={(text)=>{setKeyword(text)}}/>

      <Icon style={styles.searchIcon} name="search" size={38} color={colors.darkGray}></Icon>
    </View>
  )
}
export default Search
const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        marginHorizontal: 16,
        paddingTop: 16,
    },
    searchInput:{
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 16,
        minWidth: "86%",
        paddingLeft: 46,
    },
    searchIcon: {
        paddingTop: 8,
        position: "absolute",
        left: 8,
    }
})