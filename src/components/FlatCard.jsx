import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../global/colors'


//Componente Wrapper
const FlatCard = ({ children }) => {
  return (
      <View style={styles.container}>
      {children}
      </View>
    )
}
  
  

export default FlatCard

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor: colors.lightGray,
        padding: 16,
        margin: 8,
        elevation:10,
        shadowOffset: {x:10, y:10},
        shadowOpacity: 0.6,
    }
})