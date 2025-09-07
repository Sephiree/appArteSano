import { Text} from 'react-native'

const TitleScript = ({children, style}) => {
    return <Text style={{fontFamily:"TitleF", ...style}}>{children}</Text>
    
}

export default TitleScript
