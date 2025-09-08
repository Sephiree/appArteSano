import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title,subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

container: {
    backgroundColor: colors.brightOrange,
    height: 150,
    justifyContent: "center",
    alignItems:"center",
    },
    title:{
        fontSize:24,
        color: colors.white,
        padding: 8,
        paddingTop: 32,
        fontFamily: "TitleF",
    },
})

