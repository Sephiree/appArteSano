import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ItemScreen } from '../../screens';
import { NavigationContainer } from '@react-navigation/native';

const  Stack = createNativeStackNavigator()

const ShopStackNavigator = () => {
    return (
        <NavigationContainer>       
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name= "Categories" component={CategoriesScreen} />
                <Stack.Screen name= "Products" component={ProductsScreen} />
                <Stack.Screen name= "Item" component={ItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default ShopStackNavigator