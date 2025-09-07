import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import TitleScript from "../components/TitleScript";


const ProductScreen = ({category}) => {
  const [productsFiltered,setProductsFilteredByCategory] = useState ([])
  useEffect(()=>{
    const ProductsFilteredByCategory = products.filter(product=>product.category.toLowerCase()===category.toLowerCase())
    setProductsFilteredByCategory(ProductsFilteredByCategory)
  },[])
  return (
    <View>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TitleScript> {item.title} </TitleScript>}
      />
    </View>
  );
};
export default ProductScreen; 
const styles = StyleSheet.create({});
