import { Text } from 'react-native'

const TitleScript = ({children, style}) => {
    return <Text style={{ fontFamily:"BodyF",...style}}>{children}</Text>
}

export default TitleScript
